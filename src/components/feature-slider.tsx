import { Box, Typography } from '@mui/material';
import { AudioFeatureSlider } from './styles';
import React from 'react';

interface FeatureSliderProps {
  onChange: (value: string) => void;
  name: string;
  value?: any;
}

export const FeatureSlider = ({
  onChange,
  name,
  value,
}: FeatureSliderProps) => {
  return (
    <>
      <Typography gutterBottom>{name}?</Typography>
      <AudioFeatureSlider
        valueLabelDisplay="auto"
        aria-label="slider"
        defaultValue={value ?? 0}
        onChange={(_, value) => onChange(String(value))}
      />
      <Box sx={{ m: 3 }} />
    </>
  );
};
