// AnswerDisplay.jsx
import React from 'react';
import { Paper, Typography } from '@mui/material';

const AnswerDisplay = ({ answer }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Answer
      </Typography>
      <Typography variant="body1">{answer}</Typography>
    </Paper>
  );
};

export default AnswerDisplay;
