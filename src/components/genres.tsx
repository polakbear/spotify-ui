import React from 'react';
import { Genre, useGetGenresQuery } from '../generated/graphql';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { WallPaper, Widget } from './styles';
import { Container } from '@mui/material';

interface AutocompleteOption {
  label: string;
}

export const Genres: React.FC = () => {
  const { loading, error, data } = useGetGenresQuery();
  if (loading) return <>loading</>;
  if (error) return <p>boo.</p>;
  if (!data) return <p>nothing found</p>;

  const convert = (data: any): AutocompleteOption[] => {
    if (data) {
      return data.map((genre: Genre) => {
        return {
          label: genre?.name ?? '',
        };
      });
    }

    return [];
  };

  let options: AutocompleteOption[] = [];

  if (data) {
    options = convert(data?.genres?.result);
  }

  return (
    <>
      <Container maxWidth="xl">
        <Stack
          maxWidth="xl"
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
        >
          <Widget>
            <Autocomplete
              multiple
              id="tags-standard"
              options={options}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Pick a few genres"
                  placeholder=""
                />
              )}
            />
          </Widget>
          <Widget>HELLO</Widget>
          <Widget>HELLO</Widget>
          <Widget>HELLO</Widget>
        </Stack>
      </Container>
      <WallPaper />
    </>
  );
};
