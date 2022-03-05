import React from 'react';
import { useGetGenresQuery } from '../generated/graphql';
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
  const appendGenre = (option: string[]) => {
    let selected = option
      .map((opt) => {
        return opt;
      })
      .join(',');

    updateGenres(selected);
  };

  if (loading) return <>loading</>;
  if (error || !data?.genres || data?.genres.length === 0) return <p>boo.</p>;
  if (!data) return <p>nothing found</p>;

  const { genres } = data;

  return (
    <>
      <Autocomplete
        multiple
        id="tags-standard"
        options={genres}
        getOptionLabel={(option) => option}
        isOptionEqualToValue={(option, value) => option === value}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <GenreChip label={option} {...getTagProps({ index })} />
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
