import React from 'react'
import Navbar from './components/Navbar/Navbar'


import {Routes, Route} from 'react-router-dom'

import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
     <div className='app'>
      <Navbar/>
      
      
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
      
    </div>
    <Footer/>
    
    
    
    </>

   
  )
}

export default App
