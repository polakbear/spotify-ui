import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';
import { Track } from '../generated/graphql';
import { AudioAnalysis } from './chart';

interface SongDetailsProps {
  track: Track;
}
export const SongCard = ({ track }: SongDetailsProps) => {
  const artistName = track.artists
    .map((art) => {
      return art.name;
    })
    .join(', ');

  return (
    <Card
      sx={{
        maxWidth: 370,
        borderRadius: 0,
      }}
    >
      <CardActionArea>
        <CardContent>
          <Avatar
            sx={{
              width: '64px',
              height: '64px',
              position: 'absolute',
              top: '2%',
              right: '80%',
            }}
            alt={artistName}
            src={track.album.images[0].url ?? ''}
          />{' '}
          <Typography
            sx={{
              width: '300px',
              position: 'absolute',
              top: '0%',
              right: '-56%',
              fontSize: '14px',
            }}
            variant="subtitle2"
          >
            {track.name}
          </Typography>
          <Typography
            sx={{
              width: '300px',
              position: 'absolute',
              top: '5%',
              right: '-42%',
              fontSize: '10px',
            }}
          >
            {artistName}
          </Typography>
          <AudioAnalysis id={track.id} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
