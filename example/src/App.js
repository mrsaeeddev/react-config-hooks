import React from 'react'
import { useOS, useBrowser,useConfig } from 'react-config-hooks'

const App = () => {
  const [os,isWin,isMac,isUnix,isLinux,isWinMob,isAndroid,isiOS] = useOS();
  const [browser,isChrome,isFirefox,isIE,isEdge,isSafari,isOpera,isYandex] = useBrowser();
  const [deviceConfig,isCookieEnabled] = useConfig();
  return (
    <div>
      <h2>OS Configuration</h2>
      <h4>Your host : {os}</h4>
      {isWin && <div>This is Windows OS</div>}
      {isMac && <div>This is Mac OS</div>}
      {isUnix && <div>This is Unix-based OS</div>}
      {isLinux && <div>This is Linux OS</div>}
      {isWinMob && <div>This is Windows Mobile OS</div>}
      {isAndroid && <div>This is Android OS</div>}
      {isiOS && <div>This is iOS</div>}
      <br />
      <h2>Browser Configuration</h2>
      <h4>Your browser: {browser}</h4>
      {isChrome && <div>This is Google Chrome</div>}
      {isFirefox && <div>This is Firefox</div>}
      {isIE && <div>This is IE</div>}
      {isEdge && <div>This is Edge</div>}
      {isSafari && <div>This is Safari</div>}
      {isOpera && <div>This is Opera</div>}
      {isYandex && <div>This is Yandex</div>}
      <br />
      <h2>Device Configuration</h2>
      <h4>Your browser has cookies enabled : {isCookieEnabled ? "true":"false"}</h4>
    </div>
  )
}
export default App