import { useState, useEffect } from 'react'

export const useConfig = () => {
  const [deviceConfig, setDeviceConfig] = useState([])
  const [isCookieEnabled, setIsCookieEnabled] = useState(false)

  function checkDeviceConfig() {
    if (navigator.cookieEnabled) {
        setDeviceConfig({...deviceConfig,'hasCookieEnabled':true});
        setIsCookieEnabled(true)
    }
  }

  useEffect(() => {
      checkDeviceConfig();
  }, [])

  return [deviceConfig,isCookieEnabled]
}
