'use client'
import { IoIosArrowForward } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FaStar } from "react-icons/fa6";
import Image from 'next/image';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import Card from '@/app/component/Card/Card';
import Link from 'next/link';
import Header from '@/app/component/Header/Header';


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
interface IParams {
    id: string;
}


export default function ProductDetails({ params }: { params: IParams }) {
    const [data, setData] = useState<ITodo | null>(null);
    const [products, setProducts] = useState<ITodo[]>([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const parsedResponse = await response.json();
                setData(parsedResponse)
                const response2 = await fetch(`https://fakestoreapi.com/products/`);
                if (!response2.ok) {
                    throw new Error(`HTTP error! Status: ${response2.status}`);
                }
                const parsedResponse2 = await response2.json();
                setProducts(parsedResponse2)
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();

    }, [params.id])


    return (
        <>
            <Header searchQuery='' setSearchQuery={() => ''}></Header>
            <section className="w-full h-[60px] bg-white flex items-center justify-around">
                <Link href={`/`}><span className='flex py-[8px] px-[15px] border-1 border-[#ebebeb] hover:shadow-[#cccccc] rounded-full bg-white shadow-[0_0_20px_2px] shadow-[#e1e1e1]'><h3 className="montserrat-semibold text-sm text-black">Home</h3></span></Link>
                <Link href={`/products/category/jewelery`}><span className='flex py-[8px] px-[15px] border-1 border-[#ebebeb] hover:shadow-[#cccccc] rounded-full bg-white shadow-[0_0_20px_2px] shadow-[#e1e1e1]'><h3 className="montserrat-semibold text-sm text-black">Jewelery</h3></span></Link>
                <Link href={`/products/category/men's clothing`}><span className='flex py-[8px] px-[15px] border-1 border-[#ebebeb] hover:shadow-[#cccccc] rounded-full bg-white shadow-[0_0_20px_2px] shadow-[#e1e1e1]'><h3 className="montserrat-semibold text-sm text-black">Men Clothing</h3></span></Link>
                <Link href={`/products/category/electronics`}><span className='flex py-[8px] px-[15px] border-1 border-[#ebebeb] hover:shadow-[#cccccc] rounded-full bg-white shadow-[0_0_20px_2px] shadow-[#e1e1e1]'><h3 className="montserrat-semibold text-sm text-black">Electronics</h3></span></Link>
                <Link href={`/products/category/women's clothing`}><span className='flex py-[8px] px-[15px] border-1 border-[#ebebeb] hover:shadow-[#cccccc] rounded-full bg-white shadow-[0_0_20px_2px] shadow-[#e1e1e1]'><h3 className="montserrat-semibold text-sm text-black">Women Clothing</h3></span></Link>
            </section>
            <main className='w-full flex flex-col items-center justify-start'>

                {
                    isLoading ? <div className='w-full h-screen bg-[#f5f5f5] bg-[url("/loader.gif")] bg-[length:500px_300px] bg-no-repeat bg-center absolute z-10'></div> :
                        (
                            data !== null ? <>
                                <div className='w-[73%] flex items-center justify-start py-[24px] max-lg:justify-center max-lg:w-full'>

                                    <div className='flex items-center gap-[4px]'>
                                        <Link href={'/'}><h3 className='montserrat-bold text-primaryCol text-sm xxl:text-2xl'>Home</h3></Link>
                                        <IoIosArrowForward className='text-secondaryCol xxl:text-2xl' />
                                        <p className='montserrat-regular text-secondaryCol text-sm xxl:text-2xl'>Shop</p>
                                        <IoIosArrowForward className='text-secondaryCol xxl:text-2xl' />
                                        <p className='montserrat-regular text-secondaryCol text-sm inline-block w-[160px] whitespace-nowrap overflow-hidden text-ellipsis xxl:text-2xl'>{data.title}</p>
                                    </div>
                                </div>
                                <div className='w-[73%] xl:h-[70vh] flex justify-around max-lg:flex-col max-lg:w-[90%] max-lg:h-fit lg:h-[50vh] xx:h-[60vh]'>
                                    <div className='w-[40%] relative max-lg:w-full max-lg:h-[400px]'>
                                        <Image src={data.image} alt={'product'} layout='fill' className='object-contain object-top'></Image>
                                    </div>
                                    <div className='w-[50%] flex flex-col items-start justify-start py-[16px] max-lg:w-full xxl:gap-[15px]'>
                                        <h3 className='montserrat-bold text-primaryCol text-[24px] mb-2 xxl:text-4xl'>{data.title}</h3>
                                        <div className='flex ga-[5px] mb-4'>
                                            <FaStar className='text-[#F3CD03] xxl:text-3xl' />
                                            <FaStar className='text-[#F3CD03] xxl:text-3xl' />
                                            <FaStar className='text-[#F3CD03] xxl:text-3xl' />
                                            <FaStar className='text-[#F3CD03] xxl:text-3xl' />
                                            <FaRegStarHalfStroke className='text-[#F3CD03] xxl:text-3xl' />
                                            <p className='montserrat-regular text-secondaryCol text-sm xxl:text-xl'>({data.rating.count})</p>

                                        </div>
                                        <h3 className='montserrat-bold text-primaryCol text-[24px] mb-2 xxl:text-4xl'>${data.price}</h3>
                                        <div className='flex gap-2'>
                                            <p className='montserrat-bold text-primaryCol text-sm xxl:text-xl'>Availibility</p>
                                            <p className='montserrat-regular text-blueCol text-sm xxl:text-xl'>In Stock</p>
                                        </div>
                                        <p className='montserrat-regular text-secondaryCol text-sm my-2 xxl:text-xl'>Met minim Mollie non desert Alamo est sit cliquey dolor
                                            do met sent. RELIT official consequent door ENIM RELIT Mollie.
                                            Excitation venial consequent sent nostrum met.</p>
                                        <hr className='bg-[#f3f3f3] h-[2px] w-[90%] my-6' />
                                        <div className='flex items-start gap-[6px]'>

                                            {
                                                ['#23A6F0', '#23856D', '#E77C40', '#252B42'].map((col, index) => (
                                                    <span style={{ backgroundColor: `${col}` }} key={index} className='w-[25px] h-[25px] rounded-[50%] outline-[2px] outline-none '></span>
                                                ))
                                            }
                                        </div>
                                        <div className='flex gap-[10px] items-center justify-start mt-10'>

                                            <button className='bg-blueCol text-sm text-white montserrat-bold rounded-[5px] py-[10px] px-[20px] hover:bg-blueHov xxl:text-xl'>
                                                Select Options</button>
                                            <div className='px-[10px] py-[10px] rounded-[50%] border-[1px] border-primaryCol hover:bg-[#e3e3e3]'><CiHeart /></div>
                                            <div className='px-[10px] py-[10px] rounded-[50%] border-[1px] border-primaryCol hover:bg-[#e3e3e3]'><CiShoppingCart /></div>
                                            <div className='px-[10px] py-[10px] rounded-[50%] border-[1px] border-primaryCol hover:bg-[#e3e3e3]'><FaEye /></div>
                                        </div>
                                    </div>


                                </div>
                                <div className='w-[73%] flex flex-col items-start gap-[24px] pt-[100px] px-[20px] max-lg:items-center max-lg:w-[90%]'>
                                    <h2 className='montserrat-bold text-primaryCol text-[40px] max-md:text-[24px]'>Customer Reviews :</h2>
                                    <div className='w-full flex px-[20px] justify-between max-md:flex-col max-lg:gap-[25px]'>
                                        <div className='w-[48%] h-[200px] flex flex-col items-start px-10 gap-[10px] justify-center bg-[#f3f3f3] rounded-[30px] max-md:items-center max-md:w-full'>

                                            <h1 className='montserrat-bold text-primaryCol text-[58px] leading-[3rem]'>4.2</h1>
                                            <div className='flex gap-[5px]'>
                                                <FaStar className='text-[#F3CD03] text-3xl' />
                                                <FaStar className='text-[#F3CD03] text-3xl' />
                                                <FaStar className='text-[#F3CD03] text-3xl' />
                                                <FaStar className='text-[#F3CD03] text-3xl' />
                                                <FaRegStarHalfStroke className='text-[#F3CD03] text-3xl' />
                                            </div>
                                            <p className='montserrat-regular text-blueCol text-sm xxl:text-xl'>All from verified resources</p>
                                        </div>
                                        <div className='w-[48%] h-[200px] flex flex-col items-start px-10 gap-[10px] justify-center bg-[#f3f3f3] rounded-[30px] max-lg:w-full'>
                                            <div className='flex gap-[10px] items-center'>
                                                <div className='flex gap-[5px]'>
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />
                                                </div>
                                                <p className='montserrat-regular text-secondaryCol text-sm xxl:text-xl'>(99)</p>
                                            </div>
                                            <div className='flex gap-[10px] items-center'>
                                                <div className='flex gap-[5px]'>
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />

                                                </div>
                                                <p className='montserrat-regular text-secondaryCol text-sm xxl:text-xl'>(99)</p>
                                            </div>
                                            <div className='flex gap-[10px] items-center'>
                                                <div className='flex gap-[5px]'>
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />

                                                </div>
                                                <p className='montserrat-regular text-secondaryCol text-sm xxl:text-xl'>(99)</p>
                                            </div>
                                            <div className='flex gap-[10px] items-center'>
                                                <div className='flex gap-[5px]'>
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />

                                                </div>
                                                <p className='montserrat-regular text-secondaryCol text-sm xxl:text-xl'>(99)</p>
                                            </div>
                                            <div className='flex gap-[10px] items-center'>
                                                <div className='flex gap-[5px]'>
                                                    <FaStar className='text-[#F3CD03] text-base xxl:text-xl' />


                                                </div>
                                                <p className='montserrat-regular text-secondaryCol text-sm xxl:text-xl'>(99)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full px-8 flex gap-[60px] py-[60px] mt-[40px] items-center flex-col bg-[#f5f3f3]'>
                                    <div className='w-full flex flex-col items-center gap-[10px] max-md:text-center'>
                                        <p className='montserrat-regular text-secondaryCol text-[20px] xxl:text-2xl'>Featured Products</p>
                                        <h1 className='montserrat-bold text-primaryCol text-[24px] xxl:text-4xl'>BEST SELLER PRODUCTS</h1>
                                    </div>
                                    <div className='w-full grid gap-[30px] place-items-center grid-flow-row max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xx:grid-cols-4 xl:grid-col-4'>
                                        {
                                            products.map((product) => (
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
                                            ))
                                        }
                                    </div>
                                </div>
                            </> : <div className='w-full h-screen flex items-center justify-center'>
                                <p className='montserrat-regular text-primaryCol text-2xl'>Item Not Found</p>
                            </div>
                        )

                }



            </main>
        </>
    );
}