import * as React from 'react';
import { Container, Stack } from '@mui/material';
import { AudioOptions } from './components/audio-options';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
          <AudioOptions />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};
