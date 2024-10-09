import React from 'react';
import Navbar from '../Components/navbar';
import Carousel from '../Components/carousel';
import Footer from '../Components/aboutus';
import HomeImg from '../Components/homeimg';


const Home = () => {
    const slides = [
        "https://videos.pexels.com/video-files/3650326/3650326-uhd_2560_1440_30fps.mp4",
        "https://videos.pexels.com/video-files/7889414/7889414-uhd_2732_1440_25fps.mp4",
        "https://videos.pexels.com/video-files/7456475/7456475-uhd_2560_1440_30fps.mp4",
        "https://videos.pexels.com/video-files/5128918/5128918-uhd_2732_1440_24fps.mp4",
        "https://videos.pexels.com/video-files/855135/855135-hd_1280_720_24fps.mp4",
        "https://videos.pexels.com/video-files/1494297/1494297-hd_1920_1080_24fps.mp4"
    ];

    return (
        <>
      
            <Navbar />
            
            <div className="w-full h-full flex flex-col items-center pt-13 bg-origin-border bg-center">
                <div className="w-full max-h-screen-lg py-4 px-5">
                    <Carousel slides={slides} />
                </div>
            </div>
            <div className="flex justify-between items-center py-6 px-6 ">
            <HomeImg/>
            </div>
            
            <Footer  />
        </>
    );
};

export default Home;
