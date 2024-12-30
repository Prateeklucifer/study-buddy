import Link from 'next/link'
import React from 'react'

export default function AboutPage() {
    const whyUs = [
        {
            stats: "200+",
            benifits: "Partners"
        },
        {
            stats: "1000+",
            benifits: "Active users"
        },
        {
            stats: "50+",
            benifits: "Hiring Companies"
        },
        {
            stats: "90%",
            benifits: "Placement Rate"
        }
    ]
    return (
        <main>
            <section className='bg-primary/20 px-4 pt-12 pb-16'>
                <h5 className='font-semibold text-center text-primary lg:text-lg'>About Us</h5>
                <h3 className='text-2xl font-semibold text-neutral-800 text-center mt-6 lg:text-3xl'>Who are we</h3>
                <div className="container m-auto lg:flex items-center">
                    <div className="lg:w-[50%]">
                        <p className='mt-12'>
                            At Study Buddy, we believe that success starts with smart planning and consistency. Our mission is to help students of all levels stay motivated, organized, and on track with their study goals. Whether you're preparing for exams, mastering new subjects, or improving your study habits, Study Buddy is here to guide you every step of the way.
                        </p>
                        <p className='mt-5'>
                            With Study Buddy, setting clear and achievable goals has never been easier. Our platform allows you to break down your academic ambitions into manageable tasks, track your progress, and get real-time insights into how close you are to reaching your targets. Visual trackers and reminders ensure that you stay on top of your studies, while the flexible tools allow you to personalize your study plan to fit your unique needs and schedule.
                        </p>
                        <p className='mt-5'>
                            But we don't just stop at helping you set goals. Study Buddy is designed to keep you motivated and accountable. From daily task checklists and time tracking features to rewards and progress analytics, we make sure you celebrate every milestone. Join the Study Buddy community today and start achieving your study goals with a little help from your new best study companion!
                        </p>
                    </div>
                    <div className="hidden lg:block lg:w-[50%] h-full ml-8 mt-8">
                        <img
                            src="https://img.freepik.com/free-photo/researchers-looking-alternative-energy-souces_23-2149311504.jpg?t=st=1735498244~exp=1735501844~hmac=4541e8cc72f18873eef359ada1a0a3c22b787a48d3a935fc5bbf8de4612f78b6&w=1380"
                            alt="Study Image"
                            className="w-full object-cover rounded-xl h-[400px]"
                        />
                    </div>
                </div>

            </section>
            <section className='container m-auto px-4 py-12 flex flex-col'>
                <h5 className='font-semibold text-center text-primary lg:text-lg'>Why Choose Us</h5>
                <h2 className='text-2xl font-semibold text-neutral-800 text-center mt-6 md:text-3xl mb-3'>Make Exams a Breeze with Study Buddy!</h2>
                <p className='text-center md:w-[70%] m-auto lg:w-[60%]'>Say goodbye to stress and hello to success! Study Buddy is your secret weapon for acing exams with ease. With personalized study plans, real-time progress tracking, and smart goal-setting.</p>
                <Link href={"/contact"} className='flex gap-2 items-center mt-8 bg-primary w-fit text-white py-2 px-4 rounded-full text-sm lg:text-base m-auto'>Connect with us <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </span></Link>

                <div className="grid mt-28 grid-cols-1 gap-16 md:grid-cols-3 lg:grid-cols-4">
                    {
                        whyUs.map((item, index) => (
                            <div className="text-center" key={index}>
                                <h6 className='text-4xl md:text-5xl text-neutral-900'>{item.stats}</h6>
                                <p className='capitalize'>{item.benifits}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    )
} 
