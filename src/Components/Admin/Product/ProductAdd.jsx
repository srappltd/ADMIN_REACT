import React, { useRef, useState } from 'react'
import Topbar from '../AdminComponent/Topbar'

const ProductAdd = () => {
  const productInput = useRef(null)
  const [productLogo,setProductLogo] = useState("https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img.png")
  const productLogoBtn = () =>{
    productInput.current.click()
  }
  const productInputChange = (e) =>{
    setProductLogo(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/category.png'} title={'Add New Product'}/>
      <div className='w-full gap-3 mt-5'>
        <div className='w-full grid gap-5 md:grid-cols-2 grid-cols-1'>
          <div className='w-full border p-4 rounded-md'>
            <div className='text-sm'>
              <h1>Name (EN)</h1>
              <input type="text" className='w-full font-medium mt-1 py-2 border rounded px-3' placeholder='New Product' name="" id="" />
            </div>
            <div className='text-sm mt-5'>
              <h1>Short Description (EN)</h1>
              <textarea type="text" className='w-full font-medium mt-1 resize-none py-2 border h-[150px] rounded px-3' name="" id="" placeholder='Short Description (+200 characters)'></textarea>
            </div>
            
          </div>
          <div className='w-full border p-4 rounded-md relative h-[280px] md:h-full'>
            <h1 className='text-sm'>Product Image * ( Ratio 1:1 )</h1>
            <div onClick={productLogoBtn} className='w-[170px] h-[170px] rounded overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
              <img src={productLogo} className='w-full h-full object-contain' alt="" />
              <input type="file" ref={productInput} onChange={productInputChange} hidden />
            </div>
          </div>
        </div>
        <div className='w-full grid gap-5 md:grid-cols-2 grid-cols-1 mt-5'>
          <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-5 border p-4 rounded-md'>
            <div className='text-sm'>
              <h1>Category*</h1>
              <select className='w-full mt-1 py-2 border rounded px-3' name="" id="">
                <option value="">---Select---</option>
                <option value="">Pizza</option>
              </select>
            </div>
            <div className='text-sm'>
              <h1>Sub Category</h1>
              <select className='w-full mt-1 py-2 border rounded px-3' name="" id="">
                <option value="">---Select---</option>
                <option value="">Pizza</option>
              </select>
            </div>
            <div className='text-sm'>
              <h1>Item Type</h1>
              <select className='w-full mt-1 py-2 border rounded px-3' name="" id="">
                <option value="">---Select---</option>
                <option value="">Pizza</option>
              </select>
            </div>
            <div className='text-sm'>
              <h1>Product Type</h1>
              <select className='w-full mt-1 py-2 border rounded px-3' name="" id="">
                <option value="">---Select---</option>
                <option value="">Pizza</option>
              </select>
            </div>
            
            
          </div>
          <div className='w-full grid grid-cols-2 gap-5 border p-4 rounded-md'>
            <div className='text-sm'>
              <h1>Default Price*</h1>
              <input type='text' className='w-full mt-1 py-2 border rounded px-3' name="" placeholder='EX : 100' id=""/>
            </div>
            <div className='text-sm'>
              <h1>Discount Type</h1>
              <input type='text' className='w-full mt-1 py-2 border rounded px-3' name="" placeholder='EX : 5%' id=""/>
            </div>
            <div className='text-sm'>
              <h1>Available From</h1>
              <input type='time' value={'10:20'} className='w-full mt-1 py-2 border rounded px-3' name="" id=""/>
            </div>
            <div className='text-sm'>
              <h1>Available Till</h1>
              <input type='time' value={'19:20'} className='w-full mt-1 py-2 border rounded px-3' name="" id=""/>
            </div>
            
          </div>
          
        </div>
          <div className='w-full grid md:grid-cols-2 grid-cols-1 mt-5 gap-5 border p-4 rounded-md'>
            <div className='text-sm'>
              <h1>Stock Type</h1>
              <select className='w-full mt-1 py-2 border rounded px-3' name="" id="">
                <option value="">---Select---</option>
                <option value="">Unlimited</option>
                <option value="">Daily</option>
                <option value="">Fixed</option>
              </select>
            </div>
            <div className='text-sm'>
              <h1>Search Tag</h1>
              <textarea type='text' className='w-full mt-1 py-2 border rounded px-3 resize-none h-[150px]' placeholder='Enter tag' name="" id=""></textarea>
            </div>
          </div>
          <div className='flex items-center justify-end mt-5 gap-3'>
                <button className='py-[6px] px-10 border rounded flex items-center gap-2' type='reset'>Clear</button>
                <button className='py-[6px] px-7 border rounded flex items-center gap-2 bg-red-600 text-white' type='submit'>Submit</button>
            </div>
      </div>
    </div>
  )
}

export default ProductAdd
