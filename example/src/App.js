import React from 'react'
import { useOS, useBrowser } from 'react-configurational-hooks'

const App = () => {
  const [os,isWin,isMac,isUnix,isLinux,isWinMob,isAndroid,isiOS] = useOS();
  const browser = useBrowser();
  return (
    <div>
      <div>Your host : {os}</div>
      <div>Your browser : {browser}</div>
      {isWin && <div>This is Windows OS</div>}
      {isMac && <div>This is Mac OS</div>}
      {isUnix && <div>This is Unix-based OS</div>}
      {isLinux && <div>This is Linux OS</div>}
      {isWinMob && <div>This is Windows Mobile OS</div>}
      {isAndroid && <div>This is Android OS</div>}
      {isiOS && <div>This is iOS</div>}
    </div>
  )
}
export default App