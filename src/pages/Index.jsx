import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [greeting, setGreeting] = useState("Hello!");
  const greetings = ["Hello!", "Bonjour!", "Hola!", "Ciao!", "Konnichiwa!"];

  const changeGreeting = () => {
    const newGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(newGreeting);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500">
      <main className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8">{greeting}</h1>
        <Button 
          onClick={changeGreeting}
          className="bg-white text-purple-600 hover:bg-purple-100"
        >
          Say Hello
        </Button>
      </main>
    </div>
  );
};

export default Index;