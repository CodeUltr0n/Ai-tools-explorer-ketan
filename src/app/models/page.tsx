import React from 'react'
import Image from 'next/image'
import model1 from '../../assets/model1.jpg'
import model2 from '../../assets/model2.jpg'
import model3 from '../../assets/model3.jpg'
import model4 from '../../assets/model4.jpg'
import model5 from '../../assets/model5.jpg'
import model6 from '../../assets/model6.jpg'

const ModelsPage = () => {
  const descriptions = [
    'Advanced AI for text generation tasks, capable of turning simple prompts into detailed and coherent written content across various domains.',
    'Cutting-edge model designed for generating high-resolution, realistic human faces with fine-grained control.',
    'An advanced model capable of generating complex scenes with multiple objects, maintaining spatial accuracy and detail.',
    'A powerful image generation engine that transforms textual prompts into vivid and coherent visual artworks.',
    'This model excels at producing medically inspired imagery, useful for educational or illustrative healthcare content.',
    'A creative model that converts audio or textual descriptions into visually engaging illustrations or concept art.'
  ];

  const modelname=[
    'PixelForge',
    'SynthSnap',
    'VisioCraft',
    'NeuroLens',
    "ImaginoX",
    'RenderMind',
  ];

  return (
    <>
      <br />
      <br />
      <h1 className='header text-5xl text-center font-bold'>Select Your Model</h1>
      <br />
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="card w-full max-w-xs bg-base-100 shadow-xl rounded-xl">
            <figure>
              <Image
                src={[model1, model2, model3, model4, model5, model6][index]}
                alt={`Model ${index + 1}`}
                className="rounded-t-xl"
                width={190}
                height={190}
                objectFit="cover"
              />
            </figure>
            <div className="card-body bg-gray-900 text-white rounded-b-xl">
              <h2 className="card-title"> {modelname[index]}</h2>
              <p>{descriptions[index]}</p>
              <div className="card-actions justify-end mt-4">
                <a href='/tools'><button className="btn bg-indigo-500 hover:bg-pink-600 text-white font-bold">Try Now</button>
                </a>                
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ModelsPage;