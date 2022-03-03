import * as React from 'react';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, {
  buttonUnstyledClasses,
  ButtonUnstyledProps,
} from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const buttonColors = {
  500: 'rgb(0, 0, 0)',
  600: 'rgb(0, 0, 0)',
  700: 'rgb(0, 0, 0)',
};

const CustomButtonRoot = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${buttonColors[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${buttonColors[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${buttonColors[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }
`;

export const CustomButton = (props: ButtonUnstyledProps) => {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
};

interface SimpleButtonProps {
  onClick: () => void;
  label: string;
}

export const SimpleButton = ({ onClick, label }: SimpleButtonProps) => {
  return (
    <Stack spacing={2} direction="row">
      <CustomButton onClick={onClick}>{label}</CustomButton>
    </Stack>
  );
};
