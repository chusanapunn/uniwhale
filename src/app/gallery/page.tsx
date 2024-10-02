// app/gallery/page.tsx
import React from 'react';
import Header from '../components/Header';

const GalleryPage = () => {
    return (
    <div>
        <Header/>
        <div className="container mx-auto px-4">
            <h1 className="text-4xl">Gallery</h1>
            <div className="grid grid-cols-3 gap-4">
                {/* Map through art pieces here */}
                <header className="py-8">
                <h1 className="text-4xl">My art is here</h1>
        </header>
            </div>
        </div>
    </div>
    );
};

export default GalleryPage;
