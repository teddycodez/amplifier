import React, { useState } from 'react';
import { Button, Container, CssBaseline, Grid, Paper, TextField, Typography } from '@mui/material';

const App = () => {
  const [article, setArticle] = useState('');
  const [output, setOutput] = useState('');

  const handleUpload = (event) => {
    // Implement the logic to upload and process the article here
    // You can use your backend API or other services for this
    // Once processed, update the 'output' state with the result
  };

  const handleAudioOutput = () => {
    // Implement the logic to convert output to audio format
    // You might need a text-to-speech API for this
    // Update this function based on your project's requirements
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://www.solidbackgrounds.com/images/website/950x534/950x534-blue-abstract-noise-free-website-background-image.jpg")', // Replace with the path to your image
        backgroundSize: 'cover',
        height: '100vh', // Adjust as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Paper elevation={3} style={{ padding: 20, marginTop: 20, background: 'rgba(255,255,255,0.8)' }}>
          <Typography variant="h4" align="center" gutterBottom>
            AI Amplifier
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                multiline
                rows={10}
                variant="outlined"
                fullWidth
                label="Upload Research Paper"
                onChange={(e) => setArticle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleUpload}>
                Upload & Analyze
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Output:</Typography>
              <Paper elevation={2} style={{ padding: 10, minHeight: 100, overflowWrap: 'break-word' }}>
                {output}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary" onClick={handleAudioOutput} sx={{backgroundColor:"black"}}>
                Get Audio Output
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default App;
