'use client'

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
const Header:React.FC<NavbarProps> = ({searchQuery,setSearchQuery}) => {
  
  return (
    <header className='w-full h-[50px] bg-primaryCol px-6 text-white items-center flex justify-between max-md:px-2'>
        <h2 className='montserrat-bold text-xl'>FakeStoreAPI</h2>
        <input className='max-w-[500px] px-[10px] py-[4px] bg-white border border-[#f3f3f3] rounded-[8px] text-black' type='text' placeholder='Search for Product...' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
    </header>
  )
}

export default Header