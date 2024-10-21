"use client";

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [currentPageTitle, setCurrentPageTitle] = useState('UNIWHALE');
    const currentPage = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const pageTitles: { [key: string]: string } = {
        '/': '',
        '/contact': '| CONTACT',
        '/blog': '| BLOG',
        '/gallery': '| GALLERY',
        '/videos': '| VIDEOS',
        '/manga': '| MANGA',
      };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("Toggle Hamburger menu");
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // Assuming 1024px is your breakpoint for lg
                setIsOpen(false);
            }
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="mix-blend-exclusion text-white pt-4 px-4">
            <div className="flex justify-between items-center ">
                <h1 className="text-4xl drop-shawdow-xl tracking-wider font-light">
                    <Link href="/" className="hover:text-gray-400 hover:animate-pulse">
                        UNIWHALE
                    </Link>
                </h1>

                <h1 className="text-4xl tracking-widest ml-2">
                    {pageTitles[currentPage]}
                </h1>
                
                {/* Hamburger Icon */}
                <button
                    onClick={toggleMenu}
                    className="block focus:outline-none ml-auto lg:hidden"
                >
                    <svg
                        className="w-6 h-6 hover:animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg> 
                </button>

                {/* Navigation Links */}
                <ul
                    className={`lg:flex lg:space-x-4 tracking-widest font-thin text-xl
                    tra  ${isOpen ? ' ease-out absolute top-16 left-0 w-full flex flex-col space-y-4 z-50' : ' hidden'} 
                    lg:visible lg:h-auto lg:w-auto lg:space-y-0 lg:relative`}
                >
                    <li className="py-2 text-right mt-4 mr-4 lg:py-0 lg:mt-0 lg:mr-0 ">
                        <Link href="/contact" className="hover:text-gray-400">
                            Contact
                        </Link>
                    </li>
                    <li className="py-2 text-right mr-4 lg:py-0 lg:mr-0">
                        <Link href="/blog" className="hover:text-gray-400">
                            Blog
                        </Link>
                    </li>
                    <li className="py-2 text-right mr-4 lg:py-0">
                        <Link href="/gallery" className="hover:text-gray-400">
                            Gallery
                        </Link>
                    </li>
                    <li className="py-2 text-right mr-4 lg:py-0">
                        <Link href="/videos" className="hover:text-gray-400">
                            Videos
                        </Link>
                    </li>
                    <li className="py-2 text-right mr-4 pb-8 lg:py-0">
                        <Link href="/manga" className="hover:text-gray-400">
                            Manga
                        </Link>
                    </li>
                </ul>
                
            </div>
            <hr
                className={`my-4 h-2 ${isOpen ? 'pb-72' : ''}`}
            />
        </header>
    );
};

