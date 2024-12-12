"use client";
import React, { useState } from 'react';
import './App.css';

function App() {
  // Initial order of elements
  const [elements, setElements] = useState([
    { id: 1, label: 'Div 1' },
    { id: 2, label: 'Div 2' },
    { id: 3, label: 'Div 3' },
  ]);

  // Function to shift the clicked element to the center
  const shiftToCenter = (clickedId: number) => {
    if (clickedId === elements[1].id) {
      // Do nothing if the center element is clicked
      return;
    }

    // Reorder the elements based on the clicked element
    if (clickedId === elements[0].id) {
      setElements([elements[0], elements[1], elements[2]]);
    } else if (clickedId === elements[2].id) {
      setElements([elements[1], elements[2], elements[0]]);
    }
  };

  return (
    <div className="container">
      {elements.map((element, index) => (
        <div
          key={element.id}
          className={`box ${index === 1 ? 'center' : ''}`}
          onClick={() => shiftToCenter(element.id)}
        >
          {element.label}
        </div>
      ))}
    </div>
  );
}

export default App;
