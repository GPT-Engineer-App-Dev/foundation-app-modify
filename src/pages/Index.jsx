import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [randomWord, setRandomWord] = useState('awdawd');

  const generateRandomWord = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    const length = Math.floor(Math.random() * 10) + 3; // word length between 3 and 12
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setRandomWord(result);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Random Word Generator</h1>
        <p className="text-5xl font-bold mb-8 text-green-500 break-all">{randomWord}</p>
        <Button 
          onClick={generateRandomWord}
          className="bg-blue-500 hover:bg-blue-600 text-white text-xl py-3 px-6"
        >
          Generate New Word
        </Button>
      </div>
    </div>
  );
};

export default Index;