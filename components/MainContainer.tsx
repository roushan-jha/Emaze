"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { GoogleGenerativeAI } from '@google/generative-ai';

const MainContainer = () => {
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const handleImageUpload = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const identifyImage = async (additionalPrompt : string = "") => {
        if(!image) return;

        setLoading(true);

        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
        const genAI = new GoogleGenerativeAI(apiKey!);

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
        });

        try {
            const imageParts = await fileToGenerativePart(image);
            const result = await model.generateContent([
                `Identify this image and provide its name and important information including a brief explanation about that image. ${additionalPrompt}`,
                imageParts,
            ]);
            const response = await result.response;
            const text = response.text().trim();
            
        } catch (error) {
            console.log((error as Error)?.message);
        } finally {
            setLoading(false);
        }
    };

    const fileToGenerativePart = async (file : File) : Promise<{
        inlineData : { data: string; mimeType: string }
    }> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Data = reader.result as string;
                const base64Content = base64Data.split(',')[1];
                resolve({
                    inlineData: {
                        data: base64Content,
                        mimeType: file.type
                    }
                });
            }
            reader.onerror = reject;
            reader.readAsDataURL(file);
        })
    }
  return (
    <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='bg-white rounded-lg shadow-xl overflow-hidden'>
            <div className="p-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Identify Your Image</h2>
                <div className="mb-8">
                    <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 mb-2">Upload an image</label>
                    <input type="file" id="image-upload" accept='image/*' onChange={handleImageUpload} className='block w-full text-sm to-gray-500 file:mr-4 file:py-2 file:px-4 file:font-semibold file:rounded-full file:text-sm file:border-0 file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition duration-150 ease-in-out' />
                </div>
                {image && (
                    <div className='mb-8 flex justify-center'>
                        <Image
                            src={URL.createObjectURL(image)}
                            alt="Uploaded Image"
                            width={300}
                            height={300}
                            className='rounded-lg shadow-md' />
                    </div>
                )}
                <button type='button' onClick={() => identifyImage()} disabled={!image || loading} className='w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg'>
                    {loading ? "Identifying..." : "Identify Image"}
                </button>
            </div>
        </div>
    </main>
  )
}

export default MainContainer