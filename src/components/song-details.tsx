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

  console.log(track);

  return (
    <Card sx={{ backgroundColor: 'black', maxWidth: 370, borderRadius: 0 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={track.album.images[0].url ?? ''}
          alt={track.album.name}
          sx={{ borderRadius: 0 }}
        />
        <Avatar
          sx={{
            width: '40px',
            height: '40px',
            position: 'absolute',
            top: '35%',
            right: '15%',
          }}
          alt={artistName}
          src={track.artist_display}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {artistName}
          </Typography>
          <AudioAnalysis id={track.id} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          foo
        </Button>
      </CardActions>
    </Card>
  );
};
