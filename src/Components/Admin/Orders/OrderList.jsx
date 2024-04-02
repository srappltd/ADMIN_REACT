import React from 'react'
import SecondBox from '../Deshboard/SecondBox'
import FilterBox from './FilterBox'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'
import OrderTable from './OrderTable'

function OrderList() {
  return (
    <div className='w-full'>
      <div className='flex items-center gap-2'>
        <img src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/all_orders.png" className='w-6' alt="" />
        <h1 className='font-semibold text-red-500 text-lg'>All Orders</h1>
        <span className='py-1 px-3 rounded-full bg-zinc-200 text-xs font-bold'>100</span>
      </div>
      <div className='w-full border rounded-md flex flex-col gap-3 mt-5'>
        <div className='w-full p-5'>
          <FilterBox />
          <SecondBox />
          <SearchBox/>
        </div>
        <OrderTable/>
      </div>
    </div>
  )
}

export default OrderList
