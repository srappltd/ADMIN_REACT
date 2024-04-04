import React from 'react'
import ProductTable from './ProductTable'
import Topbar from '../AdminComponent/Topbar'

const Product = () => {
  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/category.png'} title={'Product List'}/>
      <div className='w-full border dark:border-zinc-700 rounded-md gap-3 mt-5'>
          <div className='w-full flex justify-between mt-5 px-5 md:text-sm text-xs font-medium'>
            <div className='md:w-3/12 w-full flex items-center border dark:border-zinc-700 rounded border-red-300'>
                <input type="text" className=' dark:bg-black w-3/4 px-3 py-2' placeholder='Search by id & title'/>
                <button className='py-2 bg-red-500 h-full text-white w-1/4'>Search</button>
            </div>
            <div className='md:flex hidden items-center gap-3 '>
                <button className='py-[6px] px-7 border rounded flex items-center gap-2 dark:border-zinc-700' type='reset'><i class="ri-download-2-line text-lg"></i> Export </button>
                <button className='py-[6px] px-4 border rounded flex items-center gap-2 dark:border-zinc-700 bg-red-600 text-white' type='submit'><i class="ri-add-fill text-lg"></i> Add New Product</button>
            </div>
          </div>
          <ProductTable/>
      </div>
    </div>
  )
}

export default Product
