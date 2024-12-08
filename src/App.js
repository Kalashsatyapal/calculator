import React, { useState } from 'react';
import './App.css';
import { evaluate, sqrt, sin, cos, tan, log, ln, pow } from 'mathjs'; // Import necessary functions from math.js

const App = () => {
  const [input, setInput] = useState('');

  // Handle button click and add value to input
  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  // Clear the input
  const handleClear = () => {
    setInput('');
  };

  // Evaluate the mathematical expression using math.js
  const handleEvaluate = () => {
    try {
      setInput(evaluate(input).toString()); // Use math.js to evaluate the input
    } catch (error) {
      setInput('Error'); // Display error if the input is invalid
    }
  };

  // Handle specific functions (like square root, etc.)
  const handleFunctionClick = (func) => {
    if (func === 'sqrt') {
      setInput('sqrt(' + input + ')');
    } else if (func === 'sin') {
      setInput('sin(' + input + ')');
    } else if (func === 'cos') {
      setInput('cos(' + input + ')');
    } else if (func === 'tan') {
      setInput('tan(' + input + ')');
    } else if (func === 'log') {
      setInput('log(' + input + ')');
    } else if (func === 'ln') {
      setInput('ln(' + input + ')');
    } else if (func === 'square') {
      setInput('pow(' + input + ', 2)');
    } else if (func === 'cube') {
      setInput('pow(' + input + ', 3)');
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="display" value={input} readOnly />
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={handleEvaluate}>=</button>

        <button onClick={handleClear}>C</button>

        {/* Scientific Function Buttons */}
        <button onClick={() => handleFunctionClick('sqrt')}>√</button>
        <button onClick={() => handleFunctionClick('square')}>x²</button>
        <button onClick={() => handleFunctionClick('cube')}>x³</button>
        <button onClick={() => handleFunctionClick('sin')}>sin</button>

        <button onClick={() => handleFunctionClick('cos')}>cos</button>
        <button onClick={() => handleFunctionClick('tan')}>tan</button>
        <button onClick={() => handleFunctionClick('log')}>log</button>
        <button onClick={() => handleFunctionClick('ln')}>ln</button>
      </div>
    </div>
  );
};

export default App;
