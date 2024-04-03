import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BannerTable from './BannerTable'
import Topbar from '../AdminComponent/Topbar'

function Banner() {
  const bannrInput = useRef(null)
  const [BannerImage,setBannerImage] = useState(null)

  const selectBannerBtn = () =>{
    bannrInput.current.click()
  }
  const bannerInputChange = (e)=>{
    setBannerImage(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/banner.png'} title={'Add New Banner'}/>
      <div className='w-full border rounded-md gap-3 mt-5'>
        <form className='w-full p-5'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-5 items-start'>
          <div className='w-full'>
            <div>
              <h1 className='text-sm mb-1'>Name (EN)</h1>
              <input type="text" placeholder='New Banner' className='border w-full py-2 text-sm rounded-sm px-3' />
            </div>
            <div>
              <h1 className='text-sm mb-1 mt-4'>Category (EN)</h1>
              <select type="text" placeholder='New Banner' className='border w-full py-2 text-sm rounded-sm px-3'>
                <option value="">Select a Category</option>
                <option value="">Ice cream</option>
                <option value="">Pizza</option>
              </select>
            </div>
            
          </div>
            
            <div className='w-full'>
              <h1>Banner Image* ( Ratio 3:1 )</h1>
              <img src={`${BannerImage ? BannerImage : 'https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img2.png'}`} className='w-full h-[200px] mt-5 object-contain mix-blend-multiply rounded-lg' alt="" />
              <p className='text-xs mt-4'>Category Image * <span className='text-red-600'>( Ratio 1:1 )</span></p>
              <div onClick={selectBannerBtn} className='w-full border rounded mt-2 flex text-sm font-medium cursor-pointer'>
                <input ref={bannrInput} onChange={bannerInputChange} type="file" hidden className='bannerInput w-full py-2 border'/>
                <div className='w-4/5 py-[10px] px-3 text-sm text-zinc-700 font-normal'>Choose File</div>
                <div className='w-1/5 flex items-center justify-center border-l'>Browse</div>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-end gap-5 mt-5'>
            <button className='py-2 px-10 border rounded' type='reset'>Clear</button>
            <button className='py-2 px-6 border rounded bg-red-600 text-white' type='submit'>Submit</button>
          </div>
        </form>
        <BannerTable/>  
      </div>
    </div>
  )
}

export default Banner
