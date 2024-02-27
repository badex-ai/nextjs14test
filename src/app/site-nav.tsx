"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const SiteNav= () => {
    const pathname = usePathname();

    interface Route{
        href: string;
        label: string

    }

    
    const siteRoutes: Route[] = [
        {href:"/home",label: 'home'},{href:'/posts', label: 'posts'}
    ]
  return (
    <nav>
        <ul className='flex gap-x-5 text-[14px]'>
            
                {siteRoutes.map((siteRoute)=>(
                    <li key={siteRoute.href}>
                    <Link href={siteRoute.href} className={`text-zinc-400 transition ${pathname === siteRoute.href ? 'text-zinc-900' : ''}`}>
                        {siteRoute.label}
                    </Link>
                    </li>
                ))}
                
           
        </ul>

    </nav>
  )
}

export default SiteNav