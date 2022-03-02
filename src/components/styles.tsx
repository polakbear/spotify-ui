import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';

//  theme.palette.mode === 'dark' ? 'rgb(0,0,0)' : 'rgb(255,255,255,0.4)',
export const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 370,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor: 'rgb(30, 215, 96)',
  backdropFilter: 'blur(40px)',
}));

export const AudioFeatureSlider = styled(Slider)({
  color: 'rgb(0, 0, 0)',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: 'rgb(0, 0, 0)',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
