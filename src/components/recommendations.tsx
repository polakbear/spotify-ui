import React from 'react';
import { Stack } from '@mui/material';
import { Widget } from './styles';

export const Recommendations: React.FC = () => {
  return (
    <Stack
      maxWidth="lg"
      direction="column"
      justifyContent="space-around"
      alignItems="start"
      spacing={2}
    >
      <Widget>foo</Widget>
    </Stack>
  );
};
