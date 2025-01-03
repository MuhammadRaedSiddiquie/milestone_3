'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import Card from './component/Card/Card';
import Header from './component/Header/Header';
import Categories from './component/Categories/Categories';



interface ITodo {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}


export default function Home() {
    const [data, setData] = useState<ITodo[]>([]);
    const [isLoading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState<string>('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const parsedResponse: ITodo[] = await response.json();
                setData(parsedResponse);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();

    }, [])
    const filteredData = data.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    return (
        <>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}></Header>
            <Categories></Categories>
            <section className='w-full h-screen bg-white flex items-center flex-col gap-[48px] py-[48px]' >
                <div className='w-full flex flex-col items-center gap-[10px] max-md:text-center'>
                    <p className='montserrat-regular text-secondaryCol text-[18px] xxl:text-2xl'>Welcome To FakeStore</p>
                    <h1 className='montserrat-bold text-primaryCol text-[28px] xxl:text-4xl'>BROWSE BEST PRODUCTS</h1>
                </div>
                <div className='w-full place-items-center px-[36px] grid gap-y-[64px] py-[64px] grid-cols-4 grid-flow-row max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xx:grid-cols-4 xl:grid-col-4'>

                    {isLoading ? <div className='w-full h-screen bg-[#f5f5f5] bg-[url("/loader.gif")] bg-[length:500px_300px] bg-no-repeat bg-center absolute z-10'></div> :

                        data ? filteredData.map((product) => (

                            <Link href={`/products/${product.id}`} key={product.id} className='shadow-[0_0_20px_1px_#e3e3e3] rounded-[40px]'>
                                <Card
                                    image={product.image}
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    category={product.category}
                                    rating={product.rating.rate}
                                    count={product.rating.count}>
                                </Card>
                            </Link>
                        )

                        ) : ""

                    }
                </div>
            </section >
        </>
    );
}
