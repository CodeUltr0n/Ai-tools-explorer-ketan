import React from 'react'

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
    <br></br>
    <br></br>
    <br></br>
    <h1 className=" header text-5xl text-center font-bold ">AI Multi-Model</h1>
    <br></br>
    <h1 className=" sub-heading text-4xl text-center font-semibold">Image Generator</h1>
    <br></br>
    <br></br>
    <p className=" para text-sm text-center font-semibold">Generate high-quality, unique images using multiple AI models.</p>
    <br></br>
    <br></br>
    <div className="floating-images mt-6 flex justify-center gap-6 z-10">
      <div className="float-img-wrapper float-delay-0">
        <image src="/images/image1.png" alt="Floating 1" className="w-14 rounded-2xl hover:scale-105 transition-transform" />
      </div>
      <div className="float-img-wrapper float-delay-1">
        <image src="/images/image2.png" alt="Floating 2" className="w-14 rounded-2xl hover:scale-105 transition-transform" />
      </div>
      <div className="float-img-wrapper float-delay-2">
        <image src="/images/image3.png" alt="Floating 3" className="w-15 h-15  rounded-2xl hover:scale-105 transition-transform" />
      </div>
       <div className="float-img-wrapper float-delay-3">
        <image src="/images/image4.png" alt="Floating 4" className="w-15 h-15 rounded-2xl hover:scale-105 transition-transform" />
      </div>
      <div className="float-img-wrapper float-delay-4">
        <image src="/images/image5.png" alt="Floating 5" className="w-14 rounded-2xl hover:scale-105 transition-transform" />
      </div>
      
      </div>
          <div className="mt-8 flex justify-center">
          <a href="/models">
          
          <button
          className="btn-start px-6 py-2 text-gray-500 font-semibold rounded-full hover:text-gray-800 transition-colors"
          style={{ backgroundColor: 'silver' }}
          >
           Explore Models
          </button>
        </a>
      </div> 
    </div>
  )
}

export default Home;
