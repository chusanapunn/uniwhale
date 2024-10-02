import React from 'react'
import Header from './components/Header';

const HomePage = () => {
  return (

<div>
  <Header/>
    <div className="container mx-auto px-4">
        <header className="py-8">
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4">Explore my art, videos, blog, and more!</p>
        </header>
    </div>
</div>
);
};

export default HomePage;
