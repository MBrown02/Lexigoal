import React, { useState } from 'react';
import EyeImg from '../../assets/eye-regular.svg';
import EarImg from '../../assets/ear-listen-solid.svg';
import './PracticePage.css';

const PracticePage = () => {
    const [inputValue, setInputValue] = useState('');
    const [isFlashMode, setAudioMode] = useState(true); // Assume day mode by default


    const handleModeToggleClick = () => {
        setAudioMode(!isFlashMode);
    };


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
                {/* Display area for the word to be practiced and the visual indicator of what mode the user selected */}
                <img className="mode-image" 
                     src={isFlashMode ? EyeImg : EarImg} 
                     alt="" />
                {/* <h1 className="practice-word-display">Word</h1> */}
                

                {/* Text field and Mode toggle Centered */}
                <div className="text-field-and-mode-toggle">
                    {/* Text field for user to enter their response */}
                    <input
                        className="response-text-field"
                        placeholder="Click here to begin practice"
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                handleEnterPress();
                            }
                        }}
                    />

                    {/* Toggle Mode Button */}
                    <button className="toggle-mode-btn"
                            onClick={handleModeToggleClick}>{isFlashMode ? "Mode: Flash" : "Mode: Audio"}</button>
                </div>


                {/* Statistics Dashboard */}
                <div className="statistics-dashboard">
                    <h3>Statistics Dashboard</h3>
                    <p>Proficiency: 0</p>
                </div>
            </div>
        </>
    );
}

export default PracticePage;