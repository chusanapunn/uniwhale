// src/app/components/Background.tsx
"use client";

import { useEffect } from 'react';

const Background = () => {
    useEffect(() => {
        const turbulenceFilter = document.getElementById('turbulenceFilter')?.firstElementChild;

        let animationFrameId = 0;
        let baseFrequencyX = 0.00042;
        let baseFrequencyY = 0.00042;
        // let animX = 0.000001;
        // let animY = 0;

        // Function to animate the turbulence
        // function animateNoise() {
        //     baseFrequencyX += animX; // Adjust the speed of the animation
        //     baseFrequencyY += animY; // Adjust the speed of the animation
            
        //     if (turbulenceFilter) {
        //         turbulenceFilter.setAttribute('baseFrequency', `${baseFrequencyX},${baseFrequencyY}`);
        //     }
        //     animationFrameId = requestAnimationFrame(animateNoise);
        // }

        // // Start the animation
        // animateNoise();

        // // Change the noise effect on hover
        // const handleMouseEnter = () => {
        //     animX = -0.0000001
        //     animY = -0.0000001
        // };

        // const handleMouseLeave = () => {
        //     animX = 0.0000001
        //     animY = 0.0000001
        // };

        // const svgElement = document.getElementById('background-svg');
        // if (svgElement) {
        //     svgElement.addEventListener('mouseenter', handleMouseEnter);
        //     svgElement.addEventListener('mouseleave', handleMouseLeave);
        // }

        // Ensure animation stops when the tab is not active
        // window.addEventListener('blur', () => {
        //     cancelAnimationFrame(animationFrameId);
        // });

        // window.addEventListener('focus', () => {
        //     animateNoise(); // Restart the animation when tab regains focus
        // });

        // Cleanup on component unmount
        return () => {
            // if (svgElement) {
            //     svgElement.removeEventListener('mouseenter', handleMouseEnter);
            //     svgElement.removeEventListener('mouseleave', handleMouseLeave);
            // }
            // cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <svg  className='filter grayscale'

      xmlns='http://www.w3.org/2000/svg'

      preserveAspectRatio="none"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
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
