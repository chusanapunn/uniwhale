import React from 'react'
import Header from './components/Header';

const HomePage = () => {
  return (

<div >
  <Header/>
    <div className="absolute inset-x-0 bottom-0 mx-auto px-4 mix-blend-exclusion">
        <header className="py-8 ">
            <h1 className="text-8xl  font-bold ">Welcome to My Portfolio</h1>
            <p className="mt-4">Explore my art, videos, blog, and more!</p>
        </header>
    </div>
    
</div>
);
};

export default HomePage;
