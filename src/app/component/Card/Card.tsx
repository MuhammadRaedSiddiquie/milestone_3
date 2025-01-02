import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";

const Card = ({image,title,description,price,category,rating,count}:{image:string,title:string,description:string,price:number,category:string,rating:number,count:number}) => {
  return (
    <div className='w-[310px] h-[580px] hover:scale-105 duration-500 rounded-[40px] flex flex-col bg-white items-center justify-start cursor-pointer'>
                        <div className='w-full min-h-[300px] relative'>
                            <Image src={image} alt='product' layout='fill' className='absolute object-center object-contain'></Image>
                        </div>
                        <div className='flex flex-col w-full items-start gap-[12px] justify-start px-[25px] pb-[35px] pt-[25px]'>
                            <h2 className='montserrat-bold h-[48px] line-clamp-2 text-black text-base xxl:text-[22px]'>{title}</h2>
                            <p className='montserrat-regular line-clamp-3 text-secondaryCol text-sm xxl:text-xl'>{description}</p>
                            <div className='flex items-center gap-[5px]'>
                                <p className='text-black montserrat-bold text-base xxl:text-[22px]'>${price}</p>
                            </div>
                            <span className='text-black montserrat-medium text-sm rounded-[14px] py-[6px] px-[14px] text-center bg-green-100'>{category}</span>
                            <div className='flex items-center gap-[6px]'>
                                <p className='text-black montserrat-regular text-sm flex items-center'>{rating} 
                                    <FaStar className='text-yellow-400 text-base'></FaStar></p>
                                <p className='text-black montserrat-regular text-sm'>({count})</p>
                                
                            </div>
                        </div>

                    </ div>
  )
}

export default Card