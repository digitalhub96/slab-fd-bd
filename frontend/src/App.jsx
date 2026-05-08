import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './Common/Navbar'
import Home from './Components/Home/Home'
import Footer from './Common/Footer'
import Breadcrumb from './Common/Breadcrumb'
import Contact from './Components/Contact/Contact'
import WorkingPlaces from './Components/WorkingPlaces/WorkingPlaces'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Breadcrumb/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact-us' element={<Contact/>} />
      <Route path='/working-places' element={<WorkingPlaces/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
