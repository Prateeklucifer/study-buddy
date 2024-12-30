import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
    return (
        <main className='h-[92vh]'>
            <div className="md:flex h-full">
                <div className="left md:w-[50%] lg:w-[60%] px-4 xl:px-40">
                    <h2 className='text-xl font-semibold text-neutral-800 my-8 md:mt-28 md:text-3xl md:mb-12'>Get Started Now</h2>
                    <div className="form">
                        <div className="">
                            <label htmlFor="name" className='pl-2 text-sm lg:text-base'>Name</label>
                            <input type="text" id='name' className='w-full text-sm lg:text-base ring-1 ring-neutral-200 rounded-full py-1 px-4 mt-2' placeholder='Enter your name' />
                        </div>
                        <div className="mt-8">
                            <label htmlFor="email" className='pl-2 text-sm lg:text-base'>Email</label>
                            <input type="email" id='email' className='w-full text-sm lg:text-base ring-1 ring-neutral-200 rounded-full py-1 px-4 mt-2' placeholder='Enter your email' />
                        </div>
                        <div className="mt-8">
                            <label htmlFor="password" className='pl-2 text-sm lg:text-base'>Password</label>
                            <input type="password" id='password' className='w-full text-sm lg:text-base ring-1 ring-neutral-200 rounded-full py-1 px-4 mt-2' placeholder='Enter your password' />
                        </div>
                        <div className="mt-8">
                            <label htmlFor="cnf-password" className='pl-2 text-sm lg:text-base'>Confirm password</label>
                            <input type="password" id='cnf-password' className='w-full text-sm lg:text-base ring-1 ring-neutral-200 rounded-full py-1 px-4 mt-2' placeholder='Confirm password' />
                        </div>
                        <button className='bg-primary w-full text-white py-2 rounded-full mt-10 mb-4 text-sm lg:text-base font-semibold'>Create an account</button>
                        <p className='text-center text-sm lg:text-base'>Already have an account? <Link href={"/login"} className='text-primary font-semibold'>Signin</Link></p>
                    </div>
                </div>
                <div className="right hidden md:flex w-[50%] lg:w-[40%]">
                    <img src="https://scilltech.com/wp-content/uploads/2024/03/Skill-Trades-768x504.png" alt="none" className='w-full h-full object-cover' />
                </div>
            </div>
        </main>
    )
}
