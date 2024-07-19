import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const words = ['wad', 'daw', 'awd'];
  const [currentWord, setCurrentWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');

  const scrambleWord = (word) => {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  };

  const newGame = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(word);
    setScrambledWord(scrambleWord(word));
    setUserGuess('');
    setMessage('');
  };

  const checkGuess = () => {
    if (userGuess.toLowerCase() === currentWord) {
      setMessage('Correct! Well done!');
    } else {
      setMessage('Sorry, that\'s not right. Try again!');
    }
  };

  useEffect(() => {
    newGame();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Word Scramble</h1>
        <p className="text-center text-2xl font-bold mb-4">{scrambledWord}</p>
        <Input
          type="text"
          placeholder="Your guess"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          className="mb-4"
        />
        <Button 
          onClick={checkGuess}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white mb-4"
        >
          Check
        </Button>
        <Button 
          onClick={newGame}
          className="w-full bg-green-500 hover:bg-green-600 text-white"
        >
          New Word
        </Button>
        {message && (
          <p className="mt-4 text-center text-lg font-semibold">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Index;