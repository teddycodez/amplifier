import React from 'react';

const OutputReader = ({ output }) => {
  const handleReadOutput = () => {
    // Implement text-to-speech functionality
    // You might use a library like responsiveVoice.js or the Web Speech API
  };

  return (
    <div>
      <h2>Output Reader</h2>
      <button onClick={handleReadOutput} style={{backgroundColor:"black"}}>Read Output</button>
    </div>
  );
};

export default OutputReader;
