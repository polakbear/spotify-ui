import React from 'react';
import { Stack } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

interface TrackListTrack {
  title: string;
  artist: string;
  album: string;
  duration: string;
}

interface RecommendationProps {
  tracks: TrackListTrack[];
}

export const Recommendations = (props: RecommendationProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    fontSize: '12px',
    backgroundColor: 'rgb(30, 215, 96)',
  }));

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
        return (
          <Accordion
            sx={{ width: '370px', padding: '0' }}
            key={index}
            expanded={expanded === `${panelName}`}
            onChange={handleChange(`${panelName}`)}
          >
            <AccordionSummary
              sx={{
                background: 'black',
                marginTop: '-16px',
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '12px',
                }}
              >
                {track.artist} - {track.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Album: {track.album}</Typography>
              <Typography>Duration: {track.duration}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Stack>
  );
};
