import React from "react";

export default function ContactPage() {
    return (
        <main>
            <section className='container m-auto px-4 py-12 flex flex-col'>
                <h5 className='font-semibold text-center text-primary lg:text-lg'>Contact Us</h5>
                <h2 className='text-2xl font-semibold text-neutral-800 text-center mt-6 md:text-3xl mb-3'>Have any doubt? feel free to contact us</h2>
                <div className="grid py-8 grid-cols-1 lg:grid-cols-2 gap-y-12 gap-9 ">
                    <form className="">
                        <label htmlFor="name" className="block mb-2 pl-2">
                            Name
                        </label>
                        <input
                            type="text"
                            className="ring-1 ring-neutral-200 py-1 lg:py-2 px-4 w-full sm:w-2/3 md:w-[90%] rounded-full focus:outline-1 outline-neutral-600 mb-9"
                            id="name"
                        />
                        <label htmlFor="email" className="block mb-2 pl-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="ring-1 ring-neutral-200 py-1 lg:py-2 px-4 w-full sm:w-2/3 md:w-[90%] rounded-full focus:outline-1 outline-neutral-600 mb-9"
                            id="email"
                        />
                        <label htmlFor="phone" className="block mb-2 pl-2">
                            Phone No
                        </label>
                        <input
                            type="number"
                            className="ring-1 ring-neutral-200 py-1 lg:py-2 px-4 w-full sm:w-2/3 md:w-[90%] rounded-full focus:outline-1 outline-neutral-600 mb-9"
                            id="phone"
                        />
                        <label htmlFor="message" className="block mb-2 pl-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="ring-1 ring-neutral-200 py-1 lg:py-2 px-4 w-full sm:w-2/3 md:w-[90%] rounded-xl focus:outline-1 outline-neutral-600 mb-9 h-80"
                        ></textarea>
                        <button className="py-2 px-4 bg-primary font-semibold rounded-full text-white">
                            Send Message
                        </button>
                    </form>
                    <div className="">
                        <h3 className="text-xl font-medium my-2 md:text-xl">Reach Out to Study Buddy</h3>
                        <p className="text-neutral-500">
                            We'd love to hear from you! Whether you have questions, suggestions, or need assistance, our team is here to help. Connect with us, and let’s make your study journey even better together!
                        </p>
                        <div className="flex flex-col gap-4 py-12">
                            <p className="flex gap-3 items-center">
                                <span className="bg-primary rounded-full p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </span>
                                studybuddy@gmail.com
                            </p>
                            <p className="flex gap-3 items-center">
                                <span className="bg-primary rounded-full p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                        />
                                    </svg>
                                </span>
                                +91 9981377420
                            </p>
                            <p className="flex gap-3 items-center">
                                <span className="bg-primary rounded-full p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                        />
                                    </svg>
                                </span>
                                Near Gol Chowk, Sector 2, DDU Nagar, Raipur, Chhattisgarh –
                                492010
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}