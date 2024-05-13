import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'

const CusomerRouters = () => {
  return (
    <div>
      <div>

      </div>

      <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default CusomerRouters
