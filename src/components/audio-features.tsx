import React, { useState } from 'react';
import { SimpleButton } from './button';
import { Track, useLoadRecommendationsLazyQuery } from '../generated/graphql';
import { FeatureSlider } from './feature-slider';
import { Genres } from './genres';
import { Widget } from './styles';
import { Recommendations } from './recommendations';

export const AudioFeatures: React.FC = () => {
  const [acousticValue, setAcousticValue] = useState('0');
  const [danceableValue, setDanceableValue] = useState('0');
  const [energeticValue, setEnergeticValue] = useState('0');
  const [instrumentalValue, setInstrumentalValue] = useState('0');
  const [popularValue, setPopularValue] = useState('0');
  const [livelyValue, setLivelyValue] = useState('0');

  const [selectedGenres, setSelectedGenres] = useState('');

  const [tracks, setTracks] = useState<any>(null);

  const audioFeatures = {
    min_acousticness: parseFloat(acousticValue) / 100,
    min_danceability: parseFloat(danceableValue) / 100,
    min_energy: parseFloat(energeticValue) / 100,
    min_instrumentalness: parseFloat(instrumentalValue) / 100,
    min_popularity: parseInt(popularValue),
    min_liveness: parseFloat(livelyValue) / 100,
  };

  const [getRecommendations, { data }] = useLoadRecommendationsLazyQuery();

  const getRec = () => {
    try {
      void getRecommendations({
        variables: {
          features: audioFeatures,
          genres: selectedGenres,
        },
      });

      const trackData = data?.recommendations?.tracks;

      if (trackData) {
        setTracks(trackData);
      }
    } catch (e) {
      console.error(e);
    }
  };

  let trackList = [];

  if (tracks) {
    trackList = tracks.map((t: Track) => {
      return {
        title: t.name,
        artist: t.artists?.join(',') ?? '',
        album: t.album?.name,
        duration: t.duration_human,
      };
    });
  }

  const updateGenres = (genres: string) => {
    setSelectedGenres(genres);
  };

  return (
    <>
      <div>
        <Widget>
          <Genres updateGenres={updateGenres} />
        </Widget>
        <div>foo</div>
        <Widget>
          <SimpleButton label="Magic!" onClick={() => getRec()} />
          <div>
            <FeatureSlider onChange={setAcousticValue} name="acoustic" />
            <FeatureSlider onChange={setDanceableValue} name="danceable" />
            <FeatureSlider onChange={setEnergeticValue} name="energetic" />
            <FeatureSlider
              onChange={setInstrumentalValue}
              name="instrumental"
            />
            <FeatureSlider onChange={setPopularValue} name="popular" />
            <FeatureSlider onChange={setLivelyValue} name="lively" />
          </div>
        </Widget>
      </div>
      <Widget sx={{ padding: 0 }}>
        {tracks !== undefined && <Recommendations tracks={trackList} />}
      </Widget>
    </>
  );
};
