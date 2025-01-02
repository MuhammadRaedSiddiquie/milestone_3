'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import Card from './component/Card/Card';



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
    return (
        <section className='w-full h-screen bg-white place-items-center px-[36px] grid gap-y-[64px] py-[64px] grid-cols-4 grid-flow-row max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xx:grid-cols-4 xl:grid-col-4' >
        
            {isLoading ? <div className='w-full h-screen bg-[#f5f5f5] bg-[url("/loader.gif")] bg-[length:500px_300px] bg-no-repeat bg-center absolute z-10'></div> :

                data ? data.map((product) => (

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

        </section >
    );
}
