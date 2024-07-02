import React, { useState , useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import Verify from './pages/verify/Verify'
import MyOrders from './pages/myOrders/MyOrders'

const App = () => {

  const [showLogin , setShowLogin] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.location.href.startsWith("https://food-delivery-frontend-no0l.onrender.com/verify?success")) {
        clearInterval(interval); 
        alert("Payment Successful! Check your orders section.");
        window.location.href = "https://food-delivery-frontend-no0l.onrender.com/";
      }
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);




  return (
    <>

    { showLogin? <LoginPopUp setShowLogin= {setShowLogin} />:<></>}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path="/verify" element= {<Verify/>} />
          <Route path="/myorders" element= {<MyOrders/>} />
        </Routes>



      </div>
      <Footer/>


    </>

  )
}

export default App
