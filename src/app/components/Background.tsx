// src/app/components/Background.tsx
"use client";

const Background = () => {

    return (
        <svg  className='filter grayscale'

      xmlns='http://www.w3.org/2000/svg'

      preserveAspectRatio="none"
      style={{ position: 'absolute', top: 0, left: 0, width: '200vw', height: '200vh', zIndex: -1 }}
        >
  <filter id='turbulenceFilter' x='0' y='0'>
    <feTurbulence
        baseFrequency="0.00045,0.0006" numOctaves="2" seed="1" type="turbulence"
    />
  </filter>
  <rect width='100%' height='100%' fill='#020000' />
  <rect  width='100%' height='100%' filter="url(#turbulenceFilter)" />
</svg>
    );
};

export default Background;
