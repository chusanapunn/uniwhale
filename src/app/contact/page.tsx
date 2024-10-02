// app/gallery/page.tsx
import React from 'react';
import Header from '../components/Header';

const ContactPage = () => {
    return (
    <div>
        <Header/>
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Contact</h1>
            <div className="grid grid-cols-3 gap-4">
                {/* Map through art pieces here */}
                <header className="py-8">
                    <h1 className="text-4xl font-bold">My Contact</h1>
                </header>
            </div>
        </div>
    </div>
    );
};

export default ContactPage;
