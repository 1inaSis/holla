'use client'
import Link from 'next/link';
import Image from 'next/image';


function Navbar() {
  return (
    <nav className="animate-gradient bg-gradient-to-r from-yellow-300 via-white to-yellow-500 bg-[length:400%_400%] sticky z-50 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="no-underline text-xl font-bold text-white">

                <Image 
                    src="/images/logo-enac.png" 
                    alt="ENACTUS Logo"
                    width={120} 
                    height={40} 
                    className="object-contain"
                />
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="text-black font-bold text-xl text-shadow-lg/3" >About</Link>
          <Link href="/team" className=" text-black font-bold text-xl">Team</Link>
          <Link href="/projects" className=" text-black font-bold text-xl">Projects</Link>
          <Link href="/events" className=" text-black font-bold text-xl">Events</Link>
          <Link href="/join" className=" text-black font-bold text-xl">Join us</Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
