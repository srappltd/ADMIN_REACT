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
import ProductReview from './Components/Admin/Product/ProductReview'
import Banner from './Components/Admin/Banner/Banner'
import Coupon from './Components/Admin/Coupon/Coupon'
import Notification from './Components/Admin/Notification/Notification'
import UsersList from './Components/Admin/Users/UsersList'
import Setting from './Components/Admin/Setting'

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
          <Route path='/admin/product-review/:id' Component={ProductReview}/>
          <Route path='/admin/banner' Component={Banner}/>
          <Route path='/admin/coupon' Component={Coupon}/>
          <Route path='/admin/notification' Component={Notification}/>
          <Route path='/admin/user-list' Component={UsersList}/>
          <Route path='/admin/add-user' Component={Notification}/>

          {/* //setting  */}
          <Route path='/admin/setting' Component={Setting}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
