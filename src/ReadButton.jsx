// ReadButton.jsx
import React from 'react';
import { Button } from '@mui/material';

const ReadButton = ({ onReadClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onReadClick}>
      Read Output
    </Button>
  );
};

export default ReadButton;
