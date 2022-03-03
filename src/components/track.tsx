import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TrackListTrack } from './recommendations';
import { SongDetails, SongHeaderTypography, SongTitle } from './styles';

interface TrackProps {
  panelName: string;
  track: TrackListTrack;
}

export const Track = ({ panelName, track }: TrackProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Accordion
      disableGutters
      sx={{ width: '370px', padding: '0' }}
      expanded={expanded === `${panelName}`}
      onChange={handleChange(`${panelName}`)}
      elevation={0}
    >
      <SongTitle
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <SongHeaderTypography>
          {track.artist} - {track.title}
        </SongHeaderTypography>
      </SongTitle>
      <SongDetails>
        <Typography>Album: {track.album}</Typography>
        <Typography>Duration: {track.duration}</Typography>
        <Typography>Album: {track.album}</Typography>
        <Typography>Duration: {track.duration}</Typography>
        <Typography>Album: {track.album}</Typography>
        <Typography>Duration: {track.duration}</Typography>
        <Typography>Album: {track.album}</Typography>
        <Typography>Duration: {track.duration}</Typography>
        <Typography>Album: {track.album}</Typography>
        <Typography>Duration: {track.duration}</Typography>
      </SongDetails>
    </Accordion>
  );
};
