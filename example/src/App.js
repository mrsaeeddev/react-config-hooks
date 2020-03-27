import React from 'react'
import { useOS, useBrowser } from 'react-configurational-hooks'

const App = () => {
  const os = useOS();
  const browser = useBrowser();
  return (
    <div>
      <div>Your host : {os}</div>
      <div>Your browser : {browser}</div>
    </div>
  )
}
export default App