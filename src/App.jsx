import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MUIdesign } from './components/MUIdesign/MUIdesign'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <MUIdesign/>
      <Footer/>
    </div>
  )

}

export default App
