import Link from "next/link";
import React from "react";

export default function Footer() {
    const links = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Services",
            href: "/services",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ];

    const socials = [
        {
            name: "Twitter",
            href: "/",
        },
        {
            name: "Facebook",
            href: "/",
        },
        {
            name: "Instagram",
            href: "/",
        },
    ];

    return (
        <>
            <section className="bg-neutral-50 text-neutral-700 py-10 lg:py-12 mt-8 ">
                <div className="grid container px-4 m-auto sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
                    <div className="">
                        <h1 className='font-semibold text-xl'><Link href={"/"}>Study<span className='text-primary'>Buddy</span></Link></h1>
                        <p className="text-neutral-500 py-2">
                            Study Buddy helps students stay organized, motivated, and on track with personalized study plans, goal tracking, and progress analytics. Achieve your academic goals with ease!
                        </p>
                    </div>
                    <div className="">
                        <h4 className="text-primary font-semibold text-xl mb-3">
                            Important Links
                        </h4>
                        <ul className="space-y-3">
                            {links.map((link) => (
                                <li key={link.name}>{link.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="text-primary font-semibold text-xl mb-3">Socials</h4>
                        <ul className="space-y-3">
                            {socials.map((social) => (
                                <li key={social.name}>{social.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="text-primary font-semibold text-xl -mb-1">Address</h4>
                        <p className="text-outline mb-4">
                            House 34 Sector 1 DDU Nagar Raipur, Chhattisgarh{" "}
                        </p>
                        <h4 className="text-primary font-semibold text-xl -mb-1">Phone</h4>
                        <p className="text-outline mb-4">+91 346548765</p>
                        <h4 className="text-primary font-semibold text-xl -mb-1">Email</h4>
                        <p className="text-outline mb-4">studybuddy@gmail.com</p>
                    </div>
                </div>
            </section>
            <footer className="bg-neutral-50 h-14 text-outline flex items-center justify-center">
                &copy; Copyrights 2024 <span className="text-primary pl-2 font-medium">studybuddy.com</span>
            </footer>
        </>
    );
}