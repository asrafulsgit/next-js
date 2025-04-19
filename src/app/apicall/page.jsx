// 'use client'
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// const page = () => {
//      const [data,setData] = useState([])
//      useEffect(()=>{
//           fetch('http://dummyjson.com/products')
//           .then(res => res.json())
//           .then(data => setData(data.products))
//           .catch(err => console.log(err))
//      },[])
//   return (
//     <div>
//       <h1 className='font-bold text-center text-2xl my-5'>Products Details</h1>
//      <div className="products flex gap-3 flex-wrap px-10" >
//      {data.length > 0 &&  data.map((product,index)=>{
//           const {brand,category,images,price,title} =product;
//           return(
//                <div className="product" key={index} style={{border: '1px solid',width : '200px' , height: '200px'}}>
//                     <img src={images[0]} className='w-[100px] h-[100px] mx-auto' alt="product image" />
//                     {/* <Image src={images[0]} width={100} height={100} alt='product image' /> */}    
//                     <h1 className='font-bold'>{brand}</h1>
//                     <p>{category}</p>
//                     <p>{price}</p>
//                     <p>{title}</p>
//                </div>
//           )
//       })}
//      </div>
//     </div>
//   )
// }

// export default page

const getData = async()=>{
     const apiCalling = await fetch('http://dummyjson.com/products')
     const data = await apiCalling.json();
     return data.products
}
const page = async() => {
    
     const data = await getData();
  return (
    <div>
      <h1 className='font-bold text-center text-2xl my-5'>Products Details</h1>
     <div className="products flex gap-3 flex-wrap px-10" >
     {data.length > 0 &&  data.map((product,index)=>{
          const {brand,category,images,price,title} =product;
          return(
               <div className="product" key={index} style={{border: '1px solid',width : '200px' , height: '200px'}}>
                    <img src={images[0]} className='w-[100px] h-[100px] mx-auto' alt="product image" />
                    {/* <Image src={images[0]} width={100} height={100} alt='product image' /> */}    
                    <h1 className='font-bold'>{brand}</h1>
                    <p>{category}</p>
                    <p>{price}</p>
                    <p>{title}</p>
               </div>
          )
      })}
     </div>
    </div>
  )
}

export default page
