import React from 'react';
import { Recommendations } from './recommendations';
import { Box, Typography } from '@mui/material';
import { AudioFeatureSlider } from './styles';
import { UnstyledButtonsSimple } from './button';

export const AudioFeatures: React.FC = () => {
  /*
      min_acousticness?: Maybe<Scalars['Float']>;
  min_danceability?: Maybe<Scalars['Float']>;
  min_energy?: Maybe<Scalars['Float']>;
  min_instrumentalness?: Maybe<Scalars['Float']>;
  min_popularity?: Maybe<Scalars['Int']>;
  min_liveness?: Maybe<Scalars['Float']>;
  min_loudness?: Maybe<Scalars['Float']>;

  duration_ms?: Maybe<Scalars['Int']>;
     */
  return (
    <>
      <Typography gutterBottom>acoustic?</Typography>
      <AudioFeatureSlider
        valueLabelDisplay="auto"
        aria-label="slider"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>danceable?</Typography>
      <AudioFeatureSlider
        valueLabelDisplay="auto"
        aria-label="slider"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>energetic?</Typography>
      <AudioFeatureSlider
        valueLabelDisplay="auto"
        aria-label="slider"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>instrumental?</Typography>
      <AudioFeatureSlider
        valueLabelDisplay="auto"
        aria-label="slider"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>popular?</Typography>
      <AudioFeatureSlider
        valueLabelDisplay="auto"
        aria-label="slider"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>lively?</Typography>
      <AudioFeatureSlider
        valueLabelDisplay="auto"
        aria-label="slider"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>loud?</Typography>
      <AudioFeatureSlider
        valueLabelDisplay="auto"
        aria-label="slider"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>long?</Typography>
      <AudioFeatureSlider
        valueLabelDisplay="auto"
        aria-label="slider"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <UnstyledButtonsSimple
        label="Magic!"
        onClick={() => console.log('magic!')}
      />
      <Recommendations />
    </>
  );
};
