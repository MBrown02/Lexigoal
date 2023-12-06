import React, { useState } from 'react';
import './PracticePage.css';

const PracticePage = () => {
    const [inputValue, setInputValue] = useState('');

    /*
        User clicks "Begin Practice" button
        - Button disappears
        - Practice word display appears
        - Text field appears
    
        A word is randomly selected from the database
        but the lower the proficiency, the more likely the word is to be selected
    */
   const handleBeginPractice = () => {
        // Button disappears
        // Practice word display appears
        // Text field appears
        
   };

    // User submits their attempt at spelling the word
    const handleEnterPress = async () => {
      try {
        const response = await fetch('http://localhost:4000/lexemes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: inputValue }),
        });
  
        const data = await response.json();
        console.log(data);
        setInputValue('');
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    return (
        <>
            <div className='practice-page-content'>
                {/* Display area for the current mode */}
                <div>
                    <h1>Current Mode: Flash</h1>
                </div>

                <div>
                    <button onClick={handleBeginPractice}>Begin Practice</button>
                </div>

                {/* Display area for the word to be practiced */}
                <div className="practice-word-display">
                    <h1>Word</h1>
                </div>

                {/* Text field for user to enter their response */}
                <div>
                    <input
                        className="response-text-field"
                        placeholder="Enter your response"
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                handleEnterPress();
                            }
                        }}
                    />
                </div>


            </div>
        </>
    );
}

export default PracticePage;