import { useState, useEffect } from 'react'

export const useBrowser = () => {
  let [os, setOS] = useState("unknown")

  function checkOS() {
    if (navigator.appVersion.indexOf("Win") != -1) 
        setOS("Windows OS");
    if (navigator.appVersion.indexOf("Mac") != -1)
        setOS("Mac");
    if (navigator.appVersion.indexOf("X11") != -1) 
        setOS("UNIX OS"); 
    if (navigator.appVersion.indexOf("Linux") != -1) 
        setOS("Linux OS"); 
  }

  useEffect(() => {
      checkOS();
  }, [])

  return os
}
