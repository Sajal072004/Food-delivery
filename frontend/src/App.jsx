import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopUp from './components/LoginPopUp/LoginPopUp.jsx'
import Verify from './pages/verify/Verify.jsx'
import MyOrders from './pages/myOrders/MyOrders.jsx'

const App = () => {

  const [showLogin , setShowLogin] = useState(false);



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
