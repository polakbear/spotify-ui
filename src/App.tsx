import * as React from 'react';
import { Box, ChakraProvider, Grid, HStack, theme } from '@chakra-ui/react';
import { Genres } from './components/genres';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="left" fontSize="l">
      <Grid minH="100vh" p={3}>
        <HStack spacing={2}>
          <Genres />
        </HStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
