import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home.jsx'
import Footer from './components/footer/Footer.jsx'
import Productes from './components/productes/Productes.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Productes/>
      <Footer/>

    </>
  )
}

export default App
