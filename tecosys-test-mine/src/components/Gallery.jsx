import React from 'react';
import img1 from "../assets/portfolio-img-1.png"
import img2 from "../assets/portfolio-img-2.png"
import img3 from "../assets/portfolio-img-3.jpg"
import img4 from "../assets/portfolio-img-4.jpg"
import img5 from "../assets/portfolio-img-5.jpg"
import img6 from "../assets/portfolio-img-6.jpg"

const images = [
  { src: img1, text: 'will update later' },
  { src: img2, text: 'will update later' },
  { src: img3, text: 'will update later' },
  { src: img4, text: 'will update later' },
  { src: img5, text: 'will update later' },
  { src: img6, text: 'will update later' },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-8 mb-4 text-purple-400">Cerina Generated Results Like This</h1>
      <p className="text-xl mb-8 text-center">Experience the power of our AI-driven solutions in creating impactful results.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img src={image.src} alt={`Gallery ${index}`} className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-lg text-purple-300">{image.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
