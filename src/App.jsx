import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './Components/Admin/Login'
import Home from './Components/Admin/Home'
import Deshboard from './Components/Admin/Deshboard/Deshboard'
import OrderList from './Components/Admin/Orders/OrderList'
import Category from './Components/Admin/Category/Category'
import SubCategory from './Components/Admin/Category/SubCategory'
import Product from './Components/Admin/Product/Product'
import ProductAdd from './Components/Admin/Product/ProductAdd'

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/admin/login' Component={SignIn} />
        <Route path='/admin' Component={Home}>
          <Route path='/admin/deshboard' Component={Deshboard}/>
          <Route path='/admin/orders' Component={OrderList}/>
          <Route path='/admin/category' Component={Category}/>
          <Route path='/admin/sub-category' Component={SubCategory}/>
          <Route path='/admin/products' Component={Product}/>
          <Route path='/admin/add-product' Component={ProductAdd}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
