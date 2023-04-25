import React from 'react'

const EditProduct = () => {
  return (
    <div className='h-screen w-full items-center justify-center py-14  px-20 md:px-30 '>
      <b className='pl-3 md:pl-7'>Edit Product</b>
      <div className=' flex flex-row h-full w-full justify-between  md:px-7 pt-7 pb-14 '>
        <div className='flex flex-col h-sreen w-6/12 justify-between bg-white rounded-2xl p-7 pb-8 md:pr-50 '>
          <div className='flex flex-col p-2 md:px-6'>
            <lable className="pb-4 font-inter font-medium ">Name</lable>
            <input className='rounded-lg font-inter h-12 font-medium border-stone-400 focus:ring-black focus:border-black' type="text" placeholder='Ex.Mangoes'/>
            <label className="pb-4 font-inter font-medium pt-10">Category</label>
          <select className='rounded-lg font-inter h-12 font-medium border-stone-400 focus:ring-black focus:border-black'>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Beverages</option>
            <option>Grocery</option>
            <option>Edible oil</option>
            <option>Household</option>
          </select>
          </div>
          <div className='flex w-full flex-row justify-between px-2 md:px-6'>
            <div className='flex w-full flex-col  justify-between pr-3 md:pr-10'>
            <lable className="pb-4 font-inter font-medium">Available</lable>
            <input className='font-inter font-medium h-12 rounded-lg w-full border-stone-400 focus:ring-black focus:border-black' type="text" placeholder='Ex.30'/>
            </div>
            <div className='flex w-full flex-col  justify-between pl-3 md:pl-10'>
            <label className="pb-4 w-full font-inter font-medium">Unit</label>
            <select className='rounded-lg font-inter h-12 font-medium w-full border-stone-400 focus:ring-black focus:border-black'>
              <option>mg</option>
              <option>g</option>
              <option>Kg</option>
            </select>
          </div>
          </div>
          <div className='flex w-full flex-row justify-between px-2 md:px-6'>
            <div className='flex flex-col w-full justify-between pr-3 md:pr-10'>
            <lable className="pb-4 font-inter font-medium">Min</lable>
            <input className='rounded-lg font-inter h-12 font-medium w-full border-stone-400 focus:ring-black focus:border-black' type="text" placeholder='Ex.0.5'/>
            </div>
            <div className='flex flex-col w-full  justify-between pl-3 md:pl-10'>
            <label className="pb-4 font-inter font-medium w-full">Max</label>
            <input className='rounded-lg font-inter h-12 font-medium w-full border-stone-400 focus:ring-black focus:border-black' type="text" placeholder='Ex.5'/>
          </div>
          </div>
        </div>
        <div className='flex ml-20 flex-col ml-15 w-6/12 h-sreen justify-between bg-white rounded-2xl p-9 pb-8 md:px-10 '>
          <div className="flex w-full flex-col  justify-between ">
          <label className="font-inter font-medium pb-4 ">Description</label>
          <textarea className=' rounded-lg border-stone-400 h-36 focus:ring-black focus:border-black'></textarea>
          </div>
          <div className='flex w-full flex-col  justify-between '>
          <lable className="font-inter font-medium pb-4">Image</lable>
          <label for="imgselect" className='font-inter font-medium border-gray-400 h-12 border overflow-hidden cursor-pointer rounded-lg h-10 pt-3 pl-2 text-gray-500' >Select the product image</label>
            <input id='imgselect' type="file" accept=".png, .jpg, .jpeg" placeholder='select img' hidden/>
            </div>
           <button className='font-inter font-medium rounded-lg bg-rurketSearchFocusGreen h-12 text-white ' ><b>Save</b></button>
           <button className='font-inter font-medium rounded-lg bg-red-500 h-12 text-white'><b>Remove</b></button>
          
        </div>
      </div>
    </div>
  )
}

export default EditProduct
