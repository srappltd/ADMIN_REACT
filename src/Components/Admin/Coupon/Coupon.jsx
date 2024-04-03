import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CouponTable from './CouponTable'
import Topbar from '../AdminComponent/Topbar'

function Coupon() {
  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/coupon.png'} title={'Add New Coupon'} />
      <div className='w-full border rounded-md gap-3 mt-5'>
        <form className='w-full p-5'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-5 items-start'>
            <div className='w-full'>
                <h1 className='text-sm mb-1'>Coupon Title</h1>
                <input type="text" placeholder='New Coupon' className='border w-full py-2 text-sm rounded-sm px-3' />
            </div>
            <div className='w-full'>
                <h1 className='text-sm mb-1 flex justify-between'>Coupon Code <span  className='font-medium text-xs text-red-500 cursor-pointer'>Generate code</span> </h1>
                <input type="text" placeholder='Ex: SRAPPLTD2018' className='border w-full py-2 text-sm rounded-sm px-3' />
            </div>
            <div className='w-full'>
                <h1 className='text-sm mb-1'>Limit For Same User</h1>
                <input type="text" placeholder='Ex: 10' className='border w-full py-2 text-sm rounded-sm px-3' />
            </div>
            <div className='w-full'>
                <h1 className='text-sm mb-1'>Discount Percent</h1>
                <input type="text" placeholder='Ex: 10%' className='border w-full py-2 text-sm rounded-sm px-3' />
            </div>
            <div className='w-full'>
                <h1 className='text-sm mb-1'>Minimum Purchase</h1>
                <input type="text" placeholder='Ex: 0' className='border w-full py-2 text-sm rounded-sm px-3' />
            </div>
            <div className='w-full'>
                <h1 className='text-sm mb-1'>Maximum Discount</h1>
                <input type="text" placeholder='Ex: 0' className='border w-full py-2 text-sm rounded-sm px-3' />
            </div>
            <div className='w-full'>
                <h1 className='text-sm mb-1'>Start Date</h1>
                <input type="date" placeholder='Ex: 0' className='border w-full py-2 text-sm rounded-sm px-3' />
            </div>
            <div className='w-full'>
                <h1 className='text-sm mb-1'>Expire Date</h1>
                <input type="date" placeholder='Ex: 0' className='border w-full py-2 text-sm rounded-sm px-3' />
            </div>
            
          </div>
          <div className='w-full flex justify-end gap-5 mt-5'>
            <button className='py-2 px-10 border rounded' type='reset'>Clear</button>
            <button className='py-2 px-6 border rounded bg-red-600 text-white' type='submit'>Submit</button>
          </div>
        </form>
        <CouponTable />
      </div>
    </div>
  )
}

export default Coupon
