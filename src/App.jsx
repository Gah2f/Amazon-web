import React from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import CheckoutProducts from './Pages/CheckoutProducts/CheckoutProducts'
import Result from './Pages/Result/Result'
import Landing from './Pages/LandingPage/Landing'
import ProductDetail from './Pages/ProductDetail/ProductDetail'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landing/> }> </Route>
      <Route path='/checkoutproducts' element={<CheckoutProducts/>}></Route>
      <Route path='/category/:categoryName' element={<Result/>}></Route>
      <Route path='/products/:productId' element={<ProductDetail/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

