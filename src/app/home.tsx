import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <br />
      <br />
      <br />
      <h1 className="header text-5xl text-center font-bold">AI Multi-Model</h1>
      <br />
      <h1 className="sub-heading text-4xl text-center font-semibold">Image Generator</h1>
      <br />
      <br />
      <p className="para text-sm text-center font-semibold">
        Generate high-quality, unique images using multiple AI models.
      </p>
      <br />
      <br />
      <div className="floating-images mt-6 flex justify-center gap-6 z-10">
        {[
          { src: '/images/image1.png', alt: 'Floating 1', size: 56 },
          { src: '/images/image2.png', alt: 'Floating 2', size: 56 },
          { src: '/images/image3.png', alt: 'Floating 3', size: 60 },
          { src: '/images/image4.png', alt: 'Floating 4', size: 60 },
          { src: '/images/image5.png', alt: 'Floating 5', size: 56 },
        ].map((img, i) => (
          <div key={i} className={`float-img-wrapper float-delay-${i}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.size}
              height={image.size}
              className="rounded-2xl hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/models">
          <button
            className="btn-start px-6 py-2 text-gray-500 font-semibold rounded-full hover:text-gray-800 transition-colors"
            style={{ backgroundColor: 'silver' }}
          >
            Explore Models
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
