import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SongDetails, SongHeaderTypography, SongTitle } from './styles';
import { SongCard } from './song-details';
import { Track } from '../generated/graphql';

interface TrackProps {
  panelName: string;
  track: Track;
}

export const Song = ({ panelName, track }: TrackProps) => {
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
      square={true}
    >
      <SongTitle
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <SongHeaderTypography>
          {track.artists[0].name} - {track.name}
        </SongHeaderTypography>
      </SongTitle>
      <SongDetails>
        <SongCard track={track} />
      </SongDetails>
    </Accordion>
  );
};
