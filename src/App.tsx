import * as React from 'react';
import { Genres } from './components/genres';
import { Widget } from './components/styles';
import { Container, Stack } from '@mui/material';
import { AudioFeatures } from './components/audio-features';
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
          alignItems="center"
          spacing={2}
        >
          <Widget>
            <Genres />
          </Widget>
          <Widget>
            <AudioFeatures />
          </Widget>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};
