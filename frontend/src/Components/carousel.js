import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Carousel({ slides, autoPlay = true, autoPlayInterval = 3000 }) {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const navigate = useNavigate(); // Initialize navigate

    const previousSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));  
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (autoPlay && !isPaused) {
            const interval = setInterval(nextSlide, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [autoPlay, autoPlayInterval, isPaused]);

    const isVideo = (url) => {
        return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
    };

    const handleExploreClick = () => {
        navigate('/products'); // Redirect to the product page
    };

    return (
        <div
            className="relative overflow-hidden h-96 w-full max-h-screen-lg mx-auto rounded-lg shadow-lg"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="flex transition-transform duration-700 ease-in-out">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === current ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {isVideo(slide) ? (
                            <video
                                src={slide}
                                autoPlay
                                loop
                                muted
                                className="w-full h-full object-cover rounded-lg"
                            />
                        ) : (
                            <img
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 flex justify-between items-center px-4">
                <button
                    onClick={previousSlide}
                    aria-label="Previous slide"
                    className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition duration-300"
                >
                    <FaArrowLeft className="text-white text-3xl" />
                </button>
                <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition duration-300"
                >
                    <FaArrowRight className="text-white text-3xl" />
                </button>
            </div>

            <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition duration-300 ${
                            current === index ? 'bg-white' : 'bg-gray-500 hover:bg-white'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Explore button */}
            <div className="absolute bottom-12 w-full flex justify-center">
                <button
                    onClick={handleExploreClick}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 bg-transparent"
                >
                    Explore
                </button>
            </div>
        </div>
    );
}

export default Carousel;
