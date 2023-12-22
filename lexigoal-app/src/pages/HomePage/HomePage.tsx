import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {

  const [inputValue, setInputValue] = useState('')

  const handleEnterPress = async () => {
    try {
        const response = await fetch('http://localhost:4000/lexemes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: inputValue })
        });

        const data = await response.json();
        console.log(data);
        setInputValue('');

    } catch (error) {
        console.error("Error posting data:", error);
    }
  };

  return (
    <div className="primary-text-field-parent">
      <input className="primary-text-field" 
              placeholder="Enter A New Word"
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  handleEnterPress();
                }
              }}/>
    </div>
  );
  };

export default HomePage;