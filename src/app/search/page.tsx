'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Card from '@/app/component/Card/Card';
import Categories from '@/app/component/Categories/Categories';
import { useSearchParams } from 'next/navigation';
interface ICategory {
    categoryname: string;
}
interface IProducts {
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
export default function SearchPage() {

    const [products, setProducts] = useState<IProducts[]>([]);
    const [isLoading, setLoading] = useState(true)
    const searchparams = useSearchParams()
    const query = searchparams.get('query') || '';

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(`https://fakestoreapi.com/products/`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const parsedResponse = await response.json();
                setProducts(parsedResponse)
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();

    }, [])
    const filteredData = products.filter((product) => product.title.toLowerCase().includes(query?.toLowerCase() || ''))
    return (
        <>

            <Categories></Categories>
            <main className='w-full flex flex-col items-center justify-start'>

                {
                    isLoading ? <div className='w-full h-screen bg-[#f5f5f5] bg-[url("/loader.gif")] bg-[length:500px_300px] bg-no-repeat bg-center absolute z-10'></div>

                        : (
                            <>
                                <div className='w-full px-8 flex gap-[60px] py-[60px] mt-[40px] items-center flex-col bg-[#f5f3f3]'>
                                    <div className='w-full flex flex-col items-center gap-[10px] max-md:text-center'>

                                        <h1 className='montserrat-bold text-primaryCol text-[24px] xxl:text-4xl'>Results for: "{query}"</h1>
                                    </div>

                                    {filteredData.length > 0 ? (
                                        <div className='w-full grid gap-[30px] place-items-center grid-flow-row max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xx:grid-cols-4 xl:grid-col-4'>
                                            {
                                                filteredData.map((product) => (
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
                                                ))}
                                        </div>
                                    ) : <div className="w-full h-screen flex col-span-4 items-start justify-center">
                                        <p className="montserrat-regular text-primaryCol text-2xl">No Results</p>
                                    </div>
                                    }

                                </div>
                            </>
                        )
                }
            </main>
        </>
    )
}