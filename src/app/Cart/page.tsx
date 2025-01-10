'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProductProps {
    id: string;
    title: string;
    price: string;
    image: string;
    quantity: number;

}


const CartPage = () => {
    const [cartItem, setCartItem] = useState<ProductProps[]>([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const storeStored: ProductProps[] = JSON.parse(localStorage.getItem('store') || '[]')
        setCartItem(storeStored);
        calculateTotal(storeStored)
        






    }, [])

    const calculateTotal = (items:ProductProps[]) => {
        const newTotal=items.reduce((acc,items) =>acc+parseFloat(items.price)*items.quantity,0)
        console.log(newTotal, "==>newtotal")
        setTotal(newTotal)
    }

    const clearCart = () => {
        localStorage.setItem('store', JSON.stringify([]));
        const cartStored: ProductProps[] = JSON.parse(localStorage.getItem('store') || '[]')
        setCartItem(cartStored);
        calculateTotal(cartStored)
        // alert('Product removed from cart!');
    }
    const removeCartItem = (productId: string) => {
        const cartStored: ProductProps[] = JSON.parse(localStorage.getItem('store') || '[]')
        const updateStore = cartStored.filter(item => item.id !== productId)
        localStorage.setItem('store', JSON.stringify(updateStore))
        setCartItem(updateStore);
        calculateTotal(updateStore)
        // alert('Product removed from cart!');

    }
    const updateQuantity = (id: string, num: number) => {
        const updateStore = cartItem.map((product) => {
            if (product.id === id) {
                const newQuantity = product.quantity + num;
                return { ...product, quantity: newQuantity > 0 ? newQuantity : 0 }
            }
            return product
        })
        localStorage.setItem('store', JSON.stringify(updateStore))
        setCartItem(updateStore);
        calculateTotal(updateStore)

    }


    return (
        <section className='w-full h-[80vh] flex items-start justify-center'>
            {
                <div className='w-[80%] h-fit flex flex-col items-center justify-start gap-8'>
                    <ul className='w-full h-[8vh] flex justify-between items-center border-b-2 border-secondaryCol'>
                        <li className='montserrat-semibold w-[40%] flex items-center justify-center text-secondaryCol text-base'>Product Name</li>
                        <li className='montserrat-semibold w-[20%] flex items-center justify-center text-secondaryCol text-base'>Quantity</li>
                        <li className='montserrat-semibold w-[20%] flex items-center justify-center text-secondaryCol text-base'>Sub-Total</li>
                        <li className='montserrat-semibold w-[10%] flex items-center justify-center text-secondaryCol text-base'>Cancel</li>

                    </ul>
                    <ul className='w-full flex flex-col justify-start items-center'>
                        {cartItem.length > 0 ? (
                            cartItem.map((product) => (
                                <li key={product.id} className='w-full h-[18vh] flex items-center justify-between border-b-2 border-[#f3f3f3]'>
                                    <div className='flex items-center gap-2 w-[40%]'>
                                        <div className='relative w-[80px] h-[80px]'>
                                            <Image src={product.image} alt={product.title} layout='fill' className='absolute object-fill object-center'></Image>
                                        </div>
                                        <div className='flex flex-col items-start justify-start gap-4 h-[80px]'>
                                            <h3 className='montserrat-bold text-primaryCol text-base'>{product.title}</h3>
                                            {/* <div className='flex items-center gap-2'>
                                                <p className='montserrat-semibold text-secondaryCol text-sm'>Color: </p>
                                                <span style={{ backgroundColor: `${product.color}` }} className='w-[20px] h-[20px] rounded-[50%]'></span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center w-[20%]'>
                                        <button className='px-[15px] py-[12px] rounded-[12px] text-black bg-[#f3f3f3]' disabled={product.quantity <= 1} onClick={() => { updateQuantity(product.id, -1) }}>-</button>
                                        <p className='p-[15px] rounded-[18px] text-black montserrat-semibold text-center'>{product.quantity}</p>
                                        <button className='px-[15px] py-[12px] rounded-[12px] text-black bg-[#f3f3f3]' onClick={() => { updateQuantity(product.id, 1) }}>+</button>
                                    </div>
                                    <div className='flex items-center justify-center w-[20%]'>
                                        <h3 className='text-black montserrat-semibold text-lg'>{parseInt(product.price) * product.quantity}</h3>
                                    </div>
                                    <div className='flex items-center justify-center w-[10%]'>
                                        <button className='h-[30px] w-[30px] bg-red-500 rounded-[50%] text-white text-center' onClick={() => removeCartItem(product.id)}>X</button>
                                    </div>

                                </li>
                            ))
                        ) : (
                            <p className='montserrat-bold text-primaryCol text-xl'>Your Cart Is Empty</p>
                        )
                        }
                    </ul>
                    <div className='h-[20px] w-full flex items-center justify-end'>

                        <button className='montserrat-bold text-blueCol text-base px-12' onClick={clearCart}>Clear Cart</button>
                    </div>
                    <div className='h-[20px] w-full flex items-end justify-center flex-col gap-4 absolute bottom-16 right-12'>
                        <div className='flex items-center justify-center flex-col gap-2'>
                            <p className='text-xl montserrat-bold text-primaryCol'>Total: $ {total}</p>
                            <button className='bg-blue-400 px-[15px] py-[8px] text-base montserrat-semibold text-white rounded-[15px]'>Proceed To Checkout</button>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default CartPage