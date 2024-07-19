import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Index = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleGreet = () => {
    if (name) {
      setGreeting(`Hello, ${name}!`);
    } else {
      setGreeting("Hello, stranger!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">Greeting App</h1>
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4"
        />
        <Button 
          onClick={handleGreet}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white"
        >
          Greet Me!
        </Button>
        {greeting && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-2xl text-center text-purple-700"
          >
            {greeting}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Index;