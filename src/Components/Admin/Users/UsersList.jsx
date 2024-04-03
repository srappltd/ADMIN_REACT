import React from 'react'
import SearchBox from './SearchBox'
import UsersTable from './UsersTable'
import Topbar from '../AdminComponent/Topbar'

function UsersList() {
  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/customer.png'} title={'All Users'}/>
      <div className='w-full border rounded-md flex flex-col gap-3 mt-5'>
        <div className='w-full p-5'>
          <div className='w-full p-5 border rounded grid grid-cols-3 gap-4'>
            <div className="card w-full h-12 border rounded p-3 flex items-center justify-center gap-3">
              <i class="ri-wallet-2-line"></i> Customer Wallet
            </div>
            <div className="card w-full h-12 border rounded p-3 flex items-center justify-center gap-3">
            <i class="ri-award-line"></i> Customer Loyality Point
            </div>
            <div className="card w-full h-12 border rounded p-3 flex items-center justify-center gap-3">
              <i class="ri-wallet-2-line"></i> Subscribed Email
            </div>
            <div className="card w-full h-12 border rounded p-3 flex items-center justify-center gap-3">
              <i class="ri-wallet-2-line"></i> Customer Address
            </div>
            
            
          </div>
          <SearchBox/>
        </div>
        <UsersTable/>
      </div>
    </div>
  )
}

export default UsersList
