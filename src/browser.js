import { useState, useEffect } from 'react'

export const useBrowser = () => {
  let [browser, setBrowser] = useState("unknown")


  function checkBrowser() {
    if (navigator.userAgent.indexOf("Chrome") != -1 ) {
        setBrowser("Google Chrome");
      }
      else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
        setBrowser("Mozilla Firefox");
      }
      else if (navigator.userAgent.indexOf("MSIE") != -1 ) {
        setBrowser("Internet Explorer");
      }
      else if (navigator.userAgent.indexOf("Edge") != -1 ) {
        setBrowser("Edge");
      }
      else if (navigator.userAgent.indexOf("Safari") != -1 ) {
        setBrowser("Safari");
      }
      else if (navigator.userAgent.indexOf("Opera") != -1 ) {
        setBrowser("Opera");
      }
      else if (navigator.userAgent.indexOf("Opera") != -1 ) {
        setBrowser("Yandex Browser");
      }
  }

  useEffect(() => {
      checkBrowser();
  }, [])

  return browser
}
