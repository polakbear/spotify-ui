import React from 'react';
import { Genre, useGetGenresQuery } from '../generated/graphql';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { GenreChip } from './styles';

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
      <Autocomplete
        multiple
        id="tags-standard"
        options={options}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <GenreChip label={option.label} {...getTagProps({ index })} />
          ))
        }
        sx={{
          color: 'white',
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            color="secondary"
            label="Pick a few genres"
            placeholder=""
          />
        )}
      />
    </>
  );
};