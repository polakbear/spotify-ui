import React from 'react';
import { Stack } from '@mui/material';
import { Track } from './track';

export interface TrackListTrack {
  title: string;
  artist: string;
  album: string;
  duration: string;
}

interface RecommendationProps {
  tracks: TrackListTrack[];
}

export const Recommendations = (props: RecommendationProps) => {
  return (
    <Stack
      maxWidth="lg"
      direction="column"
      justifyContent="space-around"
      alignItems="start"
      spacing={0}
    >
      {props.tracks.map((track, index) => {
        let panelName = `panel${index + 1}`;
        return <Track key={index} panelName={panelName} track={track} />;
      })}
    </Stack>
  );
};
