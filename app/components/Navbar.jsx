import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const links = [{
        name: "Home",
        href: "/"
    },
    {
        name: "Services",
        href: "/services"
    }, {
        name: "About",
        href: "/about"
    }, {
        name: "Contact Us",
        href: "/contact"
    },
    ]
    return (
        <header className='px-4 '>
            <nav className='container m-auto flex justify-between py-6 items-center'>
                <h1 className='font-semibold text-xl lg:text-2xl'><Link href={"/"}>Study<span className='text-primary'>Buddy</span></Link></h1>
                <div id="for-mobile" className='md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div id="for-desktop" className='hidden md:flex items-center'>
                    <ul className='flex gap-6 items-center'>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="gap-8 hidden md:flex items-center">
                    <Link href="/register">Register</Link>
                    <Link href="/login" className='bg-primary text-white rounded-full px-6 py-1'>Login</Link>
                </div>
            </nav>
        </header>
    )
}
