import React from 'react'
import { Link } from 'react-router-dom'

const NavbarRight = ({menuSlide,menuCloseBtn,menuLeft}) => {
  return (
    <nav className='w-full h-[8vh] border-b dark:border-zinc-600 flex items-center justify-between lg:px-10 px-5 text-xl bg-white dark:bg-black'>
                <div className='flex items-center lg:gap-3 gap-2'>
                    <Link to={'/'} className={`font-bold ${menuSlide ? '' : 'lg:hidden' } block text-sm lg:text-xl transition-all duration-300`}>
                        <img src="https://efood-admin.6amtech.com/storage/app/public/restaurant/2023-01-05-63b65bf675169.png" className='h-6' alt="" />
                    </Link>
                    <i onClick={menuCloseBtn} class="ri-skip-right-line lg:text-2xl cursor-pointer lg:hidden block"></i>
                </div>
                <div className='flex items-center gap-5 font-medium'>
                    <div className='lg:flex hidden items-center gap-5'>
                        <Link to={'/'}><i className="ri-message-3-fill text-xl"></i></Link>
                        <Link to={'/'}><i className="ri-shopping-cart-2-line text-xl"></i></Link>
                    </div>
                    <div className='menuLeftBtn flex items-center gap-2 cursor-pointer'>
                        <div className='text-xs pointer-events-none font-medium lg:block hidden text-zinc-700 text-end'>
                            <h1>Admin</h1>
                            <h1 className='text-zinc-400'>Master admin</h1>
                        </div>
                        <div className='w-8 h-8 border pointer-events-none rounded-full overflow-hidden'>
                            <img src="https://efood-admin.6amtech.com/storage/app/public/admin/2023-09-13-650156f48dc51.png" className='w-full pointer-events-none h-full object-cover' alt="" />
                        </div>
                    </div>
                </div>
                <div className={` text-sm font-semibold rounded bg-white text-zinc-500 shadow-[0px_0px_5px_rgba(210,210,210,5)] ${menuLeft ? 'block' : 'hidden'} fixed top-[9vh] z-30 lg:right-10 right-5`}>
                    <div className='w-full p-3 border-b flex items-center gap-3 '>
                        <img src="https://efood-admin.6amtech.com/storage/app/public/admin/2023-09-13-650156f48dc51.png" className='w-12 h-12 border shrink-0 object-cover rounded-full' alt="" />
                        <div className='w-full'>
                            <h1 className='text-black'>admin</h1>
                            <h1 className='text-zinc-500 w-full overflow-hidden font-medium'>abhaygautam626039@gmail.com</h1>
                        </div>
                    </div>
                    <Link to={'/'} className='border-b h-11 items-center flex px-3'>Setting</Link>
                    <Link to={'/'} className='border-b h-11 items-center flex px-3'>Sign out</Link>
                </div>
            </nav>
  )
}

export default NavbarRight
