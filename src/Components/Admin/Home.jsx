import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import Button from './AdminComponent/Button'
import SidebarLeft from './AdminComponent/SidebarLeft'
import SidebarRight from './AdminComponent/SidebarRight'

const Home = () => {
    const [menuClose,setMenuClose] = useState(false)
    const [menuSlide,setMenuSlide] = useState(false)
    const menuCloseBtn = () =>{
        setMenuClose(prev=>!prev)
    }
    const menuSlideBtn = () =>{
        setMenuSlide(prev=>!prev)
    }
    window.onresize = (e)=>{
        console.log(e.currentTarget.innerWidth<450)
        // console.log() 
        e.currentTarget.innerWidth < 450 ? location.reload() : ''
    }
    const [menuLeft,setMenuLeft] = useState(false)
    const handleEventBtn = (e) =>{
        e.target.classList.contains("menuLeftBtn") ? setMenuLeft(prev=>!prev) : setMenuLeft(false)
    }
  return (
    <div onClick={handleEventBtn} className='w-full h-screen overflow-hidden flex'>
        <SidebarLeft menuClose={menuClose} menuSlide={menuSlide} menuSlideBtn={menuSlideBtn} menuCloseBtn={menuCloseBtn} />
        <SidebarRight menuClose={menuClose} menuLeft={menuLeft} menuSlide={menuSlide} menuSlideBtn={menuSlideBtn} menuCloseBtn={menuCloseBtn} />
    </div>
  )
}

export default Home
