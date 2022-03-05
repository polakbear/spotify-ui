import React from 'react';
import { Stack } from '@mui/material';
import { Song } from './song';
import { Track } from '../generated/graphql';

interface RecommendationProps {
  tracks: Track[];
}

export const Recommendations = ({ tracks }: RecommendationProps) => {
  return (
    <Stack
      maxWidth="lg"
      direction="column"
      justifyContent="space-around"
      alignItems="start"
      spacing={0}
    >
      {tracks.map((track, index) => {
        let panelName = `panel${index + 1}`;
        return <Song key={index} panelName={panelName} track={track} />;
      })}
    </Stack>
  );
};
