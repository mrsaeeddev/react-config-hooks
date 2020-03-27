import React from 'react'
import { useMyHook } from 'react-configurational-hooks'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App