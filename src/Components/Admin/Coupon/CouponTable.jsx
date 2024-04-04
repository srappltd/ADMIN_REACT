import React from 'react'
import { Link } from 'react-router-dom'

const BannerTable = () => {
  return (
    <div className='w-full flex-shrink-0 py-3 overflow-x-auto'>
          <table className='md:w-full w-[700px] h-[20px] overflow-x-auto'>
              <thead className='w-full grid grid-cols-7 gap-3 py-2 border-y dark:border-zinc-700 text-sm'>
                <th className='w-11 text-start pl-3'>
                  SL
                </th>
                <th className='w-full text-start pl-3'>
                Coupon
                </th>
                <th className='w-full text-start pl-3'>
                Amount
                </th>
                <th className='w-full text-start pl-3'>
                Coupon Type
                </th>
                <th className='w-full text-start pl-3'>
                Duration
                </th>
                <th className='w-full text-start pl-3'>
                Status
                </th>
                <th className='w-full text-start pl-3'>
                Actions
                </th>
              </thead>
              <tbody>
                <tr className='w-full grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300 font-bold'>Code: OFF30 <br /><span className='text-xs font-medium text-zinc-400'>Discount on amount</span></td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>30.00$</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>Percent</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>04 Jan, 2023 - 31 Aug, 20</td>
                  <td className='pl-3 text-xs font-medium'>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" hidden value="" class="sr-only peer"/>
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  </td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded  border-red-300 text-red-500'><i class="ri-delete-bin-2-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300 font-bold'>Code: OFF30 <br /><span className='text-xs font-medium text-zinc-400'>Discount on amount</span></td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>30.00$</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>Percent</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>04 Jan, 2023 - 31 Aug, 20</td>
                  <td className='pl-3 text-xs font-medium'>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" hidden value="" class="sr-only peer"/>
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  </td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded  border-red-300 text-red-500'><i class="ri-delete-bin-2-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300 font-bold'>Code: OFF30 <br /><span className='text-xs font-medium text-zinc-400'>Discount on amount</span></td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>30.00$</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>Percent</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>04 Jan, 2023 - 31 Aug, 20</td>
                  <td className='pl-3 text-xs font-medium'>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" hidden value="" class="sr-only peer"/>
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  </td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded  border-red-300 text-red-500'><i class="ri-delete-bin-2-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300 font-bold'>Code: OFF30 <br /><span className='text-xs font-medium text-zinc-400'>Discount on amount</span></td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>30.00$</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>Percent</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>04 Jan, 2023 - 31 Aug, 20</td>
                  <td className='pl-3 text-xs font-medium'>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" hidden value="" class="sr-only peer"/>
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  </td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded  border-red-300 text-red-500'><i class="ri-delete-bin-2-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300 font-bold'>Code: OFF30 <br /><span className='text-xs font-medium text-zinc-400'>Discount on amount</span></td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>30.00$</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>Percent</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>04 Jan, 2023 - 31 Aug, 20</td>
                  <td className='pl-3 text-xs font-medium'>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" hidden value="" class="sr-only peer"/>
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  </td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded  border-red-300 text-red-500'><i class="ri-delete-bin-2-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300 font-bold'>Code: OFF30 <br /><span className='text-xs font-medium text-zinc-400'>Discount on amount</span></td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>30.00$</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>Percent</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>04 Jan, 2023 - 31 Aug, 20</td>
                  <td className='pl-3 text-xs font-medium'>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" hidden value="" class="sr-only peer"/>
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  </td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded  border-red-300 text-red-500'><i class="ri-delete-bin-2-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300 font-bold'>Code: OFF30 <br /><span className='text-xs font-medium text-zinc-400'>Discount on amount</span></td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>30.00$</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>Percent</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>04 Jan, 2023 - 31 Aug, 20</td>
                  <td className='pl-3 text-xs font-medium'>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" hidden value="" class="sr-only peer"/>
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  </td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded  border-red-300 text-red-500'><i class="ri-delete-bin-2-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300 font-bold'>Code: OFF30 <br /><span className='text-xs font-medium text-zinc-400'>Discount on amount</span></td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>30.00$</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>Percent</td>
                  <td className='pl-3 text-zinc-600 dark:text-zinc-300'>04 Jan, 2023 - 31 Aug, 20</td>
                  <td className='pl-3 text-xs font-medium'>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" hidden value="" class="sr-only peer"/>
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  </td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded  border-red-300 text-red-500'><i class="ri-delete-bin-2-line"></i></Link>
                  </td>
                </tr>
                
                
                
                
              </tbody>
          </table>
        </div>
  )
}

export default BannerTable
