import React from 'react'
import { Button } from './components/ui/button'

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <Button className='bg-red-400' variant='ghost'>Click Me</Button>
    </div>
    
    
  )
}

export default App
