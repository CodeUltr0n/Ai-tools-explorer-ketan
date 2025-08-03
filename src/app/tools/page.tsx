'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './tools.module.css';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Toolspage = () => {
  const [prediction, setPrediction] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(null), 4000);
    return () => clearTimeout(timer);
  }, [error]);

  useEffect(() => setError(null), [prompt]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const prompt = formData.get('prompt')?.toString() || '';

    try {
      const response = await fetch('/api/predictions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.detail || 'Unknown error from API');
        setLoading(false);
        return;
      }

      const initialPrediction = await response.json();
      if (initialPrediction.image) {
        setImageUrl(`data:image/png;base64,${initialPrediction.image}`);
      } else {
        setError('Image generation failed.');
      }

    } catch (err) {
      console.error('Error:', err);
      setError('Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative">
      <div className="flex flex-1">
        <div className="flex flex-col justify-center items-center flex-grow ml-8 mr-4.5">
          <div className="header text-2xl mb-8">Imagine it. Generate it.</div>
          <div className="flex items-center gap-4 bg-[#111] p-4 rounded-lg">
            <div className="bg-[#1a1a1a] px-4 py-2 rounded">
              {prompt || 'No prompt entered yet.'}
            </div>
            <div className="text-white text-2xl">→</div>
            <div className="bg-[#1a1a1a] px-4 py-2 rounded">PixelForge</div>
            <div className="text-white text-2xl">→</div>
            {imageUrl && (
              <Image
                src={imageUrl}
                alt="Result"
                width={96}
                height={96}
                className="object-cover rounded"
              />
            )}
          </div>
        </div>

        {imageUrl && (
          <div className="flex justify-center mt-56 mr-2">
            <div className="result-card w-[250px] h-[320px] bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md border border-gray-700">
              <Image
                src={imageUrl}
                alt="Result"
                width={270}
                height={270}
                className="object-cover p-2"
              />
              <div className="p-3 flex justify-between items-center">
                <a
                  href={imageUrl}
                  download="generated-image.png"
                  className="px-3 py-1 bg-blue-600 text-sm text-white rounded hover:bg-blue-700 transition"
                >
                  Download
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(imageUrl)}
                  className="px-3 py-1 bg-purple-600 text-sm text-white rounded hover:bg-purple-700 transition"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="w-[300px] bg-[#121212] p-4 border-l border-gray-800">
          <div className="mb-4">
            <label className="text-sm font-semibold">Model</label>
            <div className="bg-[#1f1f1f] p-2 rounded mt-1">PixelForge</div>
          </div>
          <div className="mb-4">
            <label className="text-sm font-semibold">Reference Image</label>
            <div className="bg-[#1f1f1f] p-2 rounded mt-1">Upload</div>
          </div>
          <div className="mb-4">
            <label className="text-sm font-semibold">Aspect Ratio</label>
            <div className="bg-[#1f1f1f] p-2 rounded mt-1">9:16</div>
          </div>
          <div className="mb-4">
            <label className="text-sm font-semibold">No. of outputs</label>
            <div className="bg-[#1f1f1f] p-2 rounded mt-1">1</div>
          </div>
          <div className="mb-4">
            <label className="text-sm font-semibold">Negative Prompt</label>
            <div className="flex gap-2 mt-1">
              <div className="bg-[#1f1f1f] px-2 py-1 rounded">SFW</div>
              <div className="bg-[#1f1f1f] px-2 py-1 rounded">General</div>
              <div className="bg-[#1f1f1f] px-2 py-1 rounded">People</div>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="absolute bottom-4 left-1/3 transform -translate-x-1/2 w-[46%] mb-6"
      >
        <div className="flex bg-[#1f1f1f] rounded-full px-4 py-2 items-center border border-gray-600">
          <input
            type="text"
            name="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your scene"
            className="bg-transparent flex-grow text-white px-4 py-2 outline-none"
          />
          <button
            type="submit"
            className="ml-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-colors"
            disabled={loading}
          >
            {loading ? '...' : 'Generate'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Toolspage;
