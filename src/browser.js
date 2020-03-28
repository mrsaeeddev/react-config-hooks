import { useState, useEffect } from 'react'

export const useBrowser = () => {
  const [browser, setBrowser] = useState("unknown")
  const [isChrome, setIsChrome] = useState(false)
  const [isFirefox, setIsFirefox] = useState(false)
  const [isIE, setIsIE] = useState(false)
  const [isEdge, setIsEdge] = useState(false)
  const [isSafari, setIsSafari] = useState(false)
  const [isOpera, setIsOpera] = useState(false)
  const [isYandex, setIsYandex] = useState(false)

  function checkBrowser() {
    if (navigator.userAgent.indexOf("Chrome") != -1 ) {
        setBrowser("Google Chrome");
        setIsChrome(true);
      }
      else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
        setBrowser("Mozilla Firefox");
        setIsFirefox(true);
      }
      else if (navigator.userAgent.indexOf("MSIE") != -1 ) {
        setBrowser("Internet Explorer");
        setIsIE(true);
      }
      else if (navigator.userAgent.indexOf("Edge") != -1 ) {
        setBrowser("Edge");
        setIsEdge(true);
      }
      else if (navigator.userAgent.indexOf("Safari") != -1 ) {
        setBrowser("Safari");
        setIsSafari(true);
      }
      else if (navigator.userAgent.indexOf("Opera") != -1 ) {
        setBrowser("Opera");
        setIsOpera(true);
      }
      else if (navigator.userAgent.indexOf("Opera") != -1 ) {
        setBrowser("Yandex Browser");
        setIsYandex(true);
      }
  }

  useEffect(() => {
      checkBrowser();
  }, [])

  return [browser,isChrome,isFirefox,isIE,isEdge,isSafari,isOpera,isYandex]
}
