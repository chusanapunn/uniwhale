import React from 'react';
import Header from '../components/Header';

const MangaPage = () => {
    return (
    <div>
        <Header />
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Manga</h1>
            <div>
                {/*  manga viewing component */}
                <h1>MY MANGA</h1>
            </div>
        </div>
    </div>
    );
};

export default MangaPage;
