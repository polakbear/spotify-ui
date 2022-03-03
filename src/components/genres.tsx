import React from 'react';
import { Genre, useGetGenresQuery } from '../generated/graphql';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { GenreChip } from './styles';

interface AutocompleteOption {
  label: string;
}

interface GenresProps {
  updateGenres: (genres: string) => void;
}

export const Genres = ({ updateGenres }: GenresProps) => {
  const { loading, error, data } = useGetGenresQuery();

  const convert = (data: Genre[]): AutocompleteOption[] | undefined => {
    if (data) {
      return data.map((genre: Genre) => {
        return {
          label: genre?.name ?? '',
        };
      });
    }
  };

  let options: AutocompleteOption[] | undefined = [];

  if (data) {
    options = convert(data?.genres);
  }

  const appendGenre = (option: AutocompleteOption[]) => {
    let selected = option
      .map((opt) => {
        return opt.label;
      })
      .join(',');

    updateGenres(selected);
  };

  if (loading) return <>loading</>;
  if (error || !options || options.length === 0) return <p>boo.</p>;
  if (!data) return <p>nothing found</p>;

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
            label="Seeding genres, resulting tracks might not be of these genres"
            placeholder=""
          />
        )}
        onChange={(_, opt) => {
          appendGenre(opt);
        }}
      />
    </>
  );
};
