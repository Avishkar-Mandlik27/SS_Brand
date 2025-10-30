import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'


function App() {
  return (
    <>
        <Navbar />
        <Outlet />
        <WhatsAppFloatingButton />
        <Footer />
    </>
  )
}

export default App
