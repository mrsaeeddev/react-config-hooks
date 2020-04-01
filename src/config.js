import { useState, useEffect } from 'react'

export const useConfig = () => {
  const [deviceConfig, setDeviceConfig] = useState([])
  const [isCookieEnabled, setIsCookieEnabled] = useState(false)
  const [isOnLine, setIsOnline] = useState(false)
  const [knownLangs, setKnownLangs] = useState("unknown")
  const [prefLang, setPrefLang] = useState("unknown")
  const [isJavaEnabled,setIsJavaEnabled] = useState(false)

  function checkDeviceConfig() {
    if (navigator.cookieEnabled) {
      setDeviceConfig(deviceConfig => deviceConfig.concat({'isCookieEnabled':true}));
      setIsCookieEnabled(true)
    }
    if (navigator.onLine) {
      setDeviceConfig(deviceConfig => deviceConfig.concat({'isOnLine':true}));
      setIsOnline(true)
    }
    if (navigator.languages) {
      setDeviceConfig(deviceConfig => deviceConfig.concat({'knownLangs':navigator.languages}))
      setKnownLangs(navigator.languages)
    }
    if (navigator.language) {
      setDeviceConfig(deviceConfig => deviceConfig.concat({'prefLang':navigator.language}))
      setPrefLang(navigator.language)
    }
    if(navigator.javaEnabled()) {
      setDeviceConfig(deviceConfig => deviceConfig.concat({'isJavaEnabled':true}))
      setIsJavaEnabled(true)
    }
  }

  useEffect(() => {
      checkDeviceConfig();
  }, [])

  return [deviceConfig,isCookieEnabled,isOnLine,knownLangs,prefLang,isJavaEnabled]
}
