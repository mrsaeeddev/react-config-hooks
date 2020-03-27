import React from 'react'
import { useOS } from 'react-configurational-hooks'

const App = () => {
  const os = useOS();
  return (
    <div>
      Your host : {os}
    </div>
  )
}
export default App