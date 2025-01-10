'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router=useRouter();
  const handleSearch=(e:React.FormEvent)=>{
    e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
        }
  }
  
  return (
    <header className='w-full h-[50px] bg-primaryCol px-6 text-white items-center flex justify-between max-md:px-2'>
        <h2 className='montserrat-bold text-xl'>FakeStoreAPI</h2>
        <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input className='max-w-[550px] px-[10px] py-[4px] bg-white border border-[#f3f3f3] rounded-[18px] text-black' type='text' placeholder='Search for Product...' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
        <button type="submit" className="bg-white text-black text-sm rounded-full px-1 py-1">
        <IoSearch className="text-[24px]"/>

        </button>
        </form>
    </header>
    
  )
}

export default Header