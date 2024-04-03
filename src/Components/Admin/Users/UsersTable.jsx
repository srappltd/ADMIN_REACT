import React from 'react'
import { Link } from 'react-router-dom'

const UsersTable = () => {
  return (
    <div className='w-full flex-shrink-0 overflow-x-auto py-3'>
          <table className='md:w-[1800px] w-[1100px] h-[20px]'>
              <thead className='w-full grid grid-cols-7 gap-3 py-2 border-y text-sm'>
                <th className='w-11 text-start pl-3'>
                  SL
                </th>
                <th className='w-full text-start pl-3'>
                Customer Name
                </th>
                <th className='w-full text-start pl-3'>
                Customer Info
                </th>
                <th className='w-full text-start pl-3'>
                Total Orders
                </th>
                <th className='w-full text-start pl-3'>
                Available Points
                </th>
                <th className='w-full text-start pl-3'>
                Order Status
                </th>
                <th className='w-full text-start pl-3'>
                Actions
                </th>
                
              </thead>
              <tbody>
                <tr className='w-full h-16 grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3 w-11'>01</td>
                  <td className='pl-3 flex items-center gap-3'><img src="https://efood-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"  className='w-10 h-10 rounded-full border object-cover' alt="" /> Abhay Gautam</td>
                  <td className='pl-3 text-sm font-medium mt-2 overflow-hidden w-full'>abhaygautam626039@gmail.com <br /><p className='mt-2 leading-[1]'>+8**********</p></td>
                  <td className='pl-3 text-zinc-600'>10</td>
                  <td className='pl-3 text-zinc-600'>12</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>Active</td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-red-300 text-red-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-printer-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full h-16 grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3 w-11'>01</td>
                  <td className='pl-3 flex items-center gap-3'><img src="https://efood-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"  className='w-10 h-10 rounded-full border object-cover' alt="" /> Abhay Gautam</td>
                  <td className='pl-3 text-sm font-medium mt-2 overflow-hidden w-full'>abhaygautam626039@gmail.com <br /><p className='mt-2 leading-[1]'>+8**********</p></td>
                  <td className='pl-3 text-zinc-600'>10</td>
                  <td className='pl-3 text-zinc-600'>12</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>Active</td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-red-300 text-red-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-printer-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full h-16 grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3 w-11'>01</td>
                  <td className='pl-3 flex items-center gap-3'><img src="https://efood-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"  className='w-10 h-10 rounded-full border object-cover' alt="" /> Abhay Gautam</td>
                  <td className='pl-3 text-sm font-medium mt-2 overflow-hidden w-full'>abhaygautam626039@gmail.com <br /><p className='mt-2 leading-[1]'>+8**********</p></td>
                  <td className='pl-3 text-zinc-600'>10</td>
                  <td className='pl-3 text-zinc-600'>12</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>Active</td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-red-300 text-red-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-printer-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full h-16 grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3 w-11'>01</td>
                  <td className='pl-3 flex items-center gap-3'><img src="https://efood-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"  className='w-10 h-10 rounded-full border object-cover' alt="" /> Abhay Gautam</td>
                  <td className='pl-3 text-sm font-medium mt-2 overflow-hidden w-full'>abhaygautam626039@gmail.com <br /><p className='mt-2 leading-[1]'>+8**********</p></td>
                  <td className='pl-3 text-zinc-600'>10</td>
                  <td className='pl-3 text-zinc-600'>12</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>Active</td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-red-300 text-red-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-printer-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full h-16 grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3 w-11'>01</td>
                  <td className='pl-3 flex items-center gap-3'><img src="https://efood-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"  className='w-10 h-10 rounded-full border object-cover' alt="" /> Abhay Gautam</td>
                  <td className='pl-3 text-sm font-medium mt-2 overflow-hidden w-full'>abhaygautam626039@gmail.com <br /><p className='mt-2 leading-[1]'>+8**********</p></td>
                  <td className='pl-3 text-zinc-600'>10</td>
                  <td className='pl-3 text-zinc-600'>12</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>Active</td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-red-300 text-red-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-printer-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full h-16 grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3 w-11'>01</td>
                  <td className='pl-3 flex items-center gap-3'><img src="https://efood-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"  className='w-10 h-10 rounded-full border object-cover' alt="" /> Abhay Gautam</td>
                  <td className='pl-3 text-sm font-medium mt-2 overflow-hidden w-full'>abhaygautam626039@gmail.com <br /><p className='mt-2 leading-[1]'>+8**********</p></td>
                  <td className='pl-3 text-zinc-600'>10</td>
                  <td className='pl-3 text-zinc-600'>12</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>Active</td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-red-300 text-red-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-printer-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full h-16 grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3 w-11'>01</td>
                  <td className='pl-3 flex items-center gap-3'><img src="https://efood-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"  className='w-10 h-10 rounded-full border object-cover' alt="" /> Abhay Gautam</td>
                  <td className='pl-3 text-sm font-medium mt-2 overflow-hidden w-full'>abhaygautam626039@gmail.com <br /><p className='mt-2 leading-[1]'>+8**********</p></td>
                  <td className='pl-3 text-zinc-600'>10</td>
                  <td className='pl-3 text-zinc-600'>12</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>Active</td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-red-300 text-red-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-printer-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full h-16 grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3 w-11'>01</td>
                  <td className='pl-3 flex items-center gap-3'><img src="https://efood-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"  className='w-10 h-10 rounded-full border object-cover' alt="" /> Abhay Gautam</td>
                  <td className='pl-3 text-sm font-medium mt-2 overflow-hidden w-full'>abhaygautam626039@gmail.com <br /><p className='mt-2 leading-[1]'>+8**********</p></td>
                  <td className='pl-3 text-zinc-600'>10</td>
                  <td className='pl-3 text-zinc-600'>12</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>Active</td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-red-300 text-red-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-printer-line"></i></Link>
                  </td>
                </tr>
                <tr className='w-full h-16 grid grid-cols-7 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3 w-11'>01</td>
                  <td className='pl-3 flex items-center gap-3'><img src="https://efood-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"  className='w-10 h-10 rounded-full border object-cover' alt="" /> Abhay Gautam</td>
                  <td className='pl-3 text-sm font-medium mt-2 overflow-hidden w-full'>abhaygautam626039@gmail.com <br /><p className='mt-2 leading-[1]'>+8**********</p></td>
                  <td className='pl-3 text-zinc-600'>10</td>
                  <td className='pl-3 text-zinc-600'>12</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>Active</td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-red-300 text-red-500'><i class="ri-eye-line"></i></Link>
                    <Link className='w-7 h-7 border flex items-center justify-center rounded border-green-300 text-green-500'><i class="ri-printer-line"></i></Link>
                  </td>
                </tr>
                
              </tbody>
          </table>
        </div>
  )
}

export default UsersTable
