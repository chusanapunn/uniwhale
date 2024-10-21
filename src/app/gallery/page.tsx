// app/gallery/page.tsx

"use client"
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import { useRouter } from 'next/compat/router';

const GalleryPage = () => {
    const [images, setImages] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch('/api/db');
            const data = await response.json();
            setImages(data);
        };

        fetchImages();
    }, []);
        const handleClick = (id: number) => {
            router.push(`/gallery/${id}`);
        };

    return (
        <div>
            <Header />
            <div className="z-50 px-4 py-2 ">
                
                <div className="drop-shadow-lg grid grid-flow-row grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-1">
                
                {images.map((image) => (
                    <div 
                    key={image.id} 
                    className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                    onClick={() => handleClick(image.id)}
                    >
                        <h1 className="absolute inset-0 bg-black bg-opacity-50
                         opacity-0 group-hover:opacity-100 text-white flex items-center 
                         justify-center transition-opacity duration-300 text-lg lg:text-2xl">
                            {image.title}
                        </h1>

                        <Image
                            src={image.image_url}
                            alt={image.title}
                            width={600}
                            height={600}
                            className=" object-none w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-white text-lg lg:text-2xl font-bold">
                  {image.title}
                </h1>
              </div>
                        </div>
                    ))}
                </div>
                <hr className="my-4 h-2"/>
            <h2 className="pb-4 text-right text-2xl tracking-widest  text-center font-normal mix-blend-subtract">
                2D Color
            </h2>
            <hr className="my-4 h-2"/>
            <h2 className="pb-4 text-right text-2xl tracking-widest  text-center font-normal mix-blend-subtract">
                3D Modeling
            </h2>
            <hr className="my-4 h-2"/>
            <h2 className="pb-4 text-right text-2xl tracking-widest  text-center font-normal mix-blend-subtract">
                Games
            </h2>
            <hr className="my-4 h-2"/>
            <h2 className="pb-4 text-right text-2xl tracking-widest  text-center font-normal mix-blend-subtract">
                2D Black&White
            </h2>
            </div>
        </div>
    );
};

export default GalleryPage;
