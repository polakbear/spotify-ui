import * as React from 'react';
import { Container, Stack } from '@mui/material';
import { AudioFeatures } from './components/audio-features';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Recommendations } from './components/recommendations';

const spotifyTheme = createTheme({
  palette: {
    background: {
      default: '#000',
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={spotifyTheme}>
      <Container sx={{ background: 'rgb(0, 0, 0)' }} maxWidth="xl">
        <Stack
          maxWidth="lg"
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          spacing={2}
        >
          <AudioFeatures />
          <Recommendations />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};
