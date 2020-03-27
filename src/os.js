import { useState, useEffect } from 'react'

export const useOS = () => {
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
    if ((navigator.appVersion.indexOf("Android") || navigator.appVersion.indexOf("android")) != -1)
        setOS("Android");
    if ((navigator.appVersion.indexOf("Apple") || navigator.appVersion.indexOf("apple")) != -1)
        setOS("iOS");
  }

  useEffect(() => {
      checkOS();
  }, [])

  return os
}
