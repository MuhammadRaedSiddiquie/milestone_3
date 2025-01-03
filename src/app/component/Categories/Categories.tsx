import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <section className="w-full h-[60px] bg-white flex py-[18px] items-center justify-around flex-wrap">
                <Link href={`/`}><span className='flex py-[8px] px-[15px] border-1 border-[#ebebeb] hover:shadow-[#cccccc] rounded-full bg-white shadow-[0_0_20px_2px] shadow-[#e1e1e1]'><h3 className="montserrat-semibold text-sm text-black max-md:text-[12px]">Home</h3></span></Link>
                <Link href={`/products/category/jewelery`}><span className='flex py-[8px] px-[15px] border-1 border-[#ebebeb] hover:shadow-[#cccccc] rounded-full bg-white shadow-[0_0_20px_2px] shadow-[#e1e1e1]'><h3 className="montserrat-semibold text-sm text-black max-md:text-[12px]">Jewelery</h3></span></Link>
                <Link href={`/products/category/men's clothing`}><span className='flex py-[8px] px-[15px] border-1 border-[#ebebeb] hover:shadow-[#cccccc] rounded-full bg-white shadow-[0_0_20px_2px] shadow-[#e1e1e1]'><h3 className="montserrat-semibold text-sm text-black max-md:text-[12px]">Men Clothing</h3></span></Link>
                <Link href={`/products/category/electronics`}><span className='flex py-[8px] px-[15px] border-1 border-[#ebebeb] hover:shadow-[#cccccc] rounded-full bg-white shadow-[0_0_20px_2px] shadow-[#e1e1e1]'><h3 className="montserrat-semibold text-sm text-black max-md:text-[12px]">Electronics</h3></span></Link>
                <Link href={`/products/category/women's clothing`}><span className='flex py-[8px] px-[15px] border-1 border-[#ebebeb] hover:shadow-[#cccccc] rounded-full bg-white shadow-[0_0_20px_2px] shadow-[#e1e1e1]'><h3 className="montserrat-semibold text-sm text-black max-md:text-[12px]">Women Clothing</h3></span></Link>
            </section>
  )
}

export default Categories