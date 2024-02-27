import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SiteNav from '../site-nav'


const Header = () => {
  return (
    <header>
        <Link href={"/"} className="flex justify-between py-4 px-7 items-center border-b">
            <Image alt="Logo" className='h-[35px] w-[35px]' width="50" height="50" src=""/>
            <SiteNav></SiteNav>
        </Link>
        

    </header>
  )
}

export default Header