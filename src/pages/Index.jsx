import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [shapes, setShapes] = useState([]);

  const generateRandomShape = () => {
    const types = ['circle', 'square', 'triangle'];
    const type = types[Math.floor(Math.random() * types.length)];
    const size = Math.random() * 100 + 20;
    const x = Math.random() * (window.innerWidth - size);
    const y = Math.random() * (window.innerHeight - size);
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

    return { type, size, x, y, color };
  };

  const addShape = () => {
    setShapes([...shapes, generateRandomShape()]);
  };

  const clearShapes = () => {
    setShapes([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="fixed top-4 left-4 z-10">
        <Button onClick={addShape} className="mr-2">Add Shape</Button>
        <Button onClick={clearShapes} variant="outline">Clear</Button>
      </div>
      <div className="relative w-full h-screen">
        {shapes.map((shape, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: shape.x,
              top: shape.y,
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.type !== 'triangle' ? shape.color : 'transparent',
              borderRadius: shape.type === 'circle' ? '50%' : '0',
              transform: shape.type === 'triangle' ? 'rotate(45deg)' : 'none',
              border: shape.type === 'triangle' ? `${shape.size / 2}px solid ${shape.color}` : 'none',
              borderColor: shape.type === 'triangle' ? `${shape.color} transparent transparent ${shape.color}` : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;