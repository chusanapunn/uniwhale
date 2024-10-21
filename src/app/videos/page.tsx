import React from 'react';
import Header from '../components/Header';
import { YouTubeEmbed } from '@next/third-parties/google';

const VideoPage = () => {
    return (
        <div>
            <Header />
            <h1 className="text-4xl font-normal tracking-widest">VIDEOS</h1>
            <div className="container overflow-auto h-screen p-4">
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className = "border-2"> <YouTubeEmbed  videoid="BnnbP7pCIvQ"  /></div>

                </div>
            </div>
        </div>
    );
};

export default VideoPage;
