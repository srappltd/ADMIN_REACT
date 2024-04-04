import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const SidebarLeft = ({menuSlide,menuClose,menuSlideBtn,menuCloseBtn}) => {
  return (
    <div className={`${menuSlide ? 'lg:w-[5vw]' : 'lg:w-1/5' } w-[60%] lg:relative absolute ${menuClose ? 'left-[0%]' : '-left-[60%]' } lg:left-0 h-screen border-r dark:border-zinc-700  bg-white dark:bg-black px-3 transition-all z-50 duration-300`}>
            <nav className='w-full h-[8vh] flex items-center justify-between px-3 text-xl'>
                <Link to={'/'} className={`font-bold ${menuSlide ? 'hidden' : '' } text-sm lg:text-xl whitespace-nowrap`}>
                    <img src="https://efood-admin.6amtech.com/storage/app/public/restaurant/2023-01-05-63b65bf675169.png" className='h-6' alt="" />
                </Link>
                <i onClick={menuCloseBtn} className="ri-skip-left-line lg:text-2xl cursor-pointer lg:hidden block"></i>
                <i onClick={menuSlideBtn} className={`ri-skip-right-line ${menuSlide ? '': 'rotate-180' } lg:text-2xl cursor-pointer lg:block hidden transition-all duration-300`}></i>
            </nav>
            <div className='w-full h-[92vh] overflow-y-auto'>

                <div className={`w-full ${menuSlide ? 'hidden' : '' } flex items-center gap-3 border px-3 rounded text-sm border-red-300`}>
                    <label htmlFor=""><i className="ri-search-2-line font-bold"></i></label>
                    <input type="text" className='dark:bg-black py-2 px-3 w-full outline-none font-medium' placeholder='Search Menu...' />
                </div>
                <div className='w-full mt-3'>
                    <Button menuSlide={menuSlide} to={'/admin/deshboard'} classChange={'ri-home-4-line'} text={'Deshboard'}/>
                </div>
                <div className='w-full mt-3'>
                    {menuSlide ? '' : <span className='text-xs font-medium text-zinc-400 pl-5'>ORDER MANAGEMENT</span> }
                    
                    <Button menuSlide={menuSlide} to={'/admin/verify-payment'} classChange={'ri-copper-coin-fill'} text={'Verify Office Payment'}/>
                    <Button menuSlide={menuSlide} to={'/admin/orders'} classChange={'ri-shopping-cart-2-line'} text={'Orders'}/>
                </div>
                <div className='w-full mt-3'>
                    {menuSlide ? '' : <span className='text-xs font-medium text-zinc-400 pl-5'>CATEGORY MANAGEMENT</span> }
                    <Button menuSlide={menuSlide} to={'/admin/category'} classChange={'ri-organization-chart'} text={'Category'}/>
                    <Button menuSlide={menuSlide} to={'/admin/sub-category'} classChange={'ri-organization-chart'} text={'Sub Category'}/>
                </div>
                <div className='w-full mt-3'>
                    {menuSlide ? '' : <span className='text-xs font-medium text-zinc-400 pl-5'>PRODUCT MANAGEMENT</span> }
                    <Button menuSlide={menuSlide} to={'/admin/products'} classChange={'ri-shining-2-line'} text={'Product List'}/>
                    <Button menuSlide={menuSlide} to={'/admin/add-product'} classChange={'ri-shopping-cart-2-line'} text={'Product Add'}/>
                    <Button menuSlide={menuSlide} to={'/admin/product-review/:id'} classChange={'ri-shopping-cart-2-line'} text={'Product Reviews'}/>
                </div>
                <div className='w-full mt-3'>
                {menuSlide ? '' : <span className='text-xs font-medium text-zinc-400 pl-5'>PROMOTION MANAGEMENT</span> }
                    <Button menuSlide={menuSlide} to={'/admin/banner'} classChange={'ri-flag-line'} text={'Banner'}/>
                    <Button menuSlide={menuSlide} to={'/admin/coupon'} classChange={'ri-ticket-2-line'} text={'Coupon'}/>
                    <Button menuSlide={menuSlide} to={'/admin/notification'} classChange={'ri-notification-badge-line'} text={'Send Notification'}/>
                </div>
                <div className='w-full mt-3'>
                {menuSlide ? '' : <span className='text-xs font-medium text-zinc-400 pl-5'>HELP & SUPPORT SECTION</span> }
                    <Button menuSlide={menuSlide} to={'/'} classChange={'ri-message-3-line'} text={'Messages'}/>
                </div>
                <div className='w-full mt-3'>
                {menuSlide ? '' :<span className='text-xs font-medium text-zinc-400 pl-5'>USER MANAGEMENT</span> }
                    <Button menuSlide={menuSlide} to={'/admin/user-list'} classChange={'ri-map-pin-user-fill'} text={'User List'}/>
                </div>
                
            </div>
        </div>
  )
}

export default SidebarLeft
