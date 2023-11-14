// QuestionInput.jsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const QuestionInput = ({ onQuestionSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = () => {
    onQuestionSubmit(question);
  };

  return (
    <div>
      <TextField
        label="Enter your question"
        variant="outlined"
        fullWidth
        onChange={handleQuestionChange}
        value={question}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default QuestionInput;
