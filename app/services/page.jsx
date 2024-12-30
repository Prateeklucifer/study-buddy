import React from 'react'

export default function ServicesPage() {
    const testimonials = [
        {
            name: "Riya Sharma, Delhi",
            feedback: "Study Buddy helped me stay on track with my study plans and boosted my confidence. Thanks to it, I cleared my exams with great results!"
        },
        {
            name: "Aarav Patel, Mumbai",
            feedback: "Study Buddy transformed my study routine. It helped me stay focused and organized, making exam prep much easier and stress-free."
        },
        {
            name: "Neha Desai, Bangalore",
            feedback: "With Study Buddy, I stayed consistent and on top of my tasks. The reminders and progress tracking made studying less stressful and more productive."
        },
    ]
    return (
        <main className=''>
            <section className='bg-primary/20 px-4 pt-12 pb-16'>
                <div className="container m-auto">

                    <h5 className='font-semibold text-center text-primary lg:text-lg'>Our Services</h5>
                    <h3 className='text-2xl font-semibold text-neutral-800 text-center mt-6 lg:text-3xl'>Activities & Services</h3>
                    <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-primary py-6 text-white px-4 rounded">
                            <span className='text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-11">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            </span>
                            <h4 className='font-semibold my-3 text-lg md:text-xl'>Personalized Study Plans</h4>
                            <p>Tailor your study sessions to fit your unique needs. Study Buddy helps you create customized study schedules, breaking down larger tasks into manageable chunks to ensure you stay on track and achieve your academic goals.</p>
                        </div>
                        <div className="bg-primary py-6 text-white px-4 rounded">
                            <span className='text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" className="size-11" fill="#e8eaed"><path d="m105-399-65-47 200-320 120 140 160-260 120 180 135-214 65 47-198 314-119-179-152 247-121-141-145 233Zm475 159q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM784-80 676-188q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T400-340q0-75 52.5-127.5T580-520q75 0 127.5 52.5T760-340q0 26-7 50.5T732-244l108 108-56 56Z" /></svg>
                            </span>
                            <h4 className='font-semibold my-3 text-lg md:text-xl'>Goal Setting & Progress Tracking</h4>
                            <p>Set clear, actionable goals and track your progress in real-time. Whether it's mastering a subject, completing assignments, or preparing for exams, Study Buddy helps you measure your success every step of the way.</p>
                        </div>
                        <div className="bg-primary py-6 text-white px-4 rounded">
                            <span className='text-white'><svg xmlns="http://www.w3.org/2000/svg" className="size-11" viewBox="0 -960 960 960" fill="#e8eaed"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" /></svg>
                            </span>
                            <h4 className='font-semibold my-3 text-lg md:text-xl'>Study Timer & Break Reminders</h4>
                            <p>Maximize your productivity with built-in study timers that keep you focused and remind you to take regular breaks. Stay in the zone with techniques like Pomodoro, designed to boost concentration and reduce burnout.</p>
                        </div>
                        <div className="bg-primary py-6 text-white px-4 rounded">
                            <span className='text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='size-11' fill="#e8eaed"><path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" /></svg>
                            </span>
                            <h4 className='font-semibold my-3 text-lg md:text-xl'>Motivational Reminders & Rewards</h4>
                            <p>Stay motivated with daily reminders, motivational quotes, and achievement rewards. Celebrate your milestones with badges and progress reports to keep you inspired throughout your academic journey.</p>
                        </div>
                        <div className="bg-primary py-6 text-white px-4 rounded">
                            <span className='text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='size-11' fill="#e8eaed"><path d="m680-80-12-60q-12-5-22.5-10.5T624-164l-58 18-40-68 46-40q-2-12-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T668-420l12-60h80l12 60q12 5 22.5 10.5T816-396l58-18 40 68-46 40q2 12 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T772-140l-12 60h-80Zm40-120q33 0 56.5-23.5T800-280q0-33-23.5-56.5T720-360q-33 0-56.5 23.5T640-280q0 33 23.5 56.5T720-200Zm-560-40v-480 172-12 320Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v131q-18-13-38-22.5T800-548v-92H447l-80-80H160v480h283q3 21 9.5 41t15.5 39H160Z" /></svg>
                            </span>
                            <h4 className='font-semibold my-3 text-lg md:text-xl'>Task Management & Deadlines</h4>
                            <p>Keep track of your assignments, projects, and exam dates with intuitive task management tools. Never miss a deadline again as Study Buddy sends reminders and provides a visual timeline of upcoming tasks.</p>
                        </div>
                        <div className="bg-primary py-6 text-white px-4 rounded">
                            <span className='text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='size-11' fill="#e8eaed"><path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z" /></svg>
                            </span>
                            <h4 className='font-semibold my-3 text-lg md:text-xl'>Community & Peer Support</h4>
                            <p>Join a community of like-minded students to share tips, study together, and motivate each other. Engage in study groups, participate in challenges, and get the support you need to stay accountable and achieve success.</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className='container m-auto px-4 py-12 flex flex-col'>
                <h5 className='font-semibold text-center text-primary lg:text-lg'>Testimonials</h5>
                <h2 className='text-2xl font-semibold text-neutral-800 text-center mt-6 md:text-3xl mb-3'>What Our Students Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {testimonials.map((testimonial, index)=>(
                    <div className="bg-primary/20 py-12 relative rounded mt-8" key={index}>
                        <div className="flex justify-center items-center flex-col gap-1">
                            <img
                                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1726247237~exp=1726250837~hmac=b6a40078c7433278e1b41b6424ec4280d1a31edd41fd7a36026a51bbfc92d269&w=740"
                                alt=""
                                className="h-14 w-14 rounded-full object-cover"
                            />
                            <span className="font-bold">{testimonial.name}</span>
                        </div>
                        <span className="absolute top-32 left-4 text-4xl md:top-32 md:left-16">
                            🙶
                        </span>
                        <span className="absolute bottom-7 md:bottom-7 right-4 text-4xl md:right-16">
                            🙷
                        </span>
                        <div className="">
                            <p className="font-Montserrat font-semibold text-center py-10 px-2 md:text-lg md:font-bold md:px-4 lg:px-8">
                               {testimonial.feedback}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
