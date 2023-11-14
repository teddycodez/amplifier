// FileUploader.jsx
import React from 'react';
import { Button, Input } from '@mui/material';

const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };

  return (
    <div>
      <Input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary">
        Upload File
      </Button>
    </div>
  );
};

export default FileUploader;
