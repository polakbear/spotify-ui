import React, { useState } from 'react';
import { SimpleButton } from './button';
import { useLoadRecommendationsLazyQuery } from '../generated/graphql';
import { FeatureSlider } from './feature-slider';
import { Genres } from './genres';
import { Widget } from './styles';
import { Recommendations } from './recommendations';

export const AudioOptions: React.FC = () => {
  const [acousticValue, setAcousticValue] = useState('0');
  const [danceableValue, setDanceableValue] = useState('0');
  const [energeticValue, setEnergeticValue] = useState('0');
  const [instrumentalValue, setInstrumentalValue] = useState('0');
  const [popularValue, setPopularValue] = useState('0');
  const [liveRecordingValue, setLiveRecordingValue] = useState('0');

  const [selectedGenres, setSelectedGenres] = useState('');

  const [tracks, setTracks] = useState<any>([]);

  const audioFeatures = {
    min_acousticness: parseFloat(acousticValue) / 100,
    min_danceability: parseFloat(danceableValue) / 100,
    min_energy: parseFloat(energeticValue) / 100,
    min_instrumentalness: parseFloat(instrumentalValue) / 100,
    min_popularity: parseInt(popularValue),
    min_liveness: parseFloat(liveRecordingValue) / 100,
  };

  const [getRecommendations, { data }] = useLoadRecommendationsLazyQuery();

  const getRec = async () => {
    try {
      await getRecommendations({
        variables: {
          audioOptions: audioFeatures,
          genres: selectedGenres,
        },
      });

      const trackData = data?.recommendations;

      if (trackData) {
        setTracks(trackData);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const updateGenres = (genres: string) => {
    setSelectedGenres(genres);
  };

  return (
    <>
      <div>
        <SimpleButton label="Magic!" onClick={() => getRec()} />
        <Widget>
          <Genres updateGenres={updateGenres} />
        </Widget>
        <div />
        <Widget>
          <FeatureSlider onChange={setAcousticValue} name="acoustic" />
          <FeatureSlider onChange={setDanceableValue} name="danceable" />
          <FeatureSlider onChange={setEnergeticValue} name="energetic" />
          <FeatureSlider onChange={setInstrumentalValue} name="instrumental" />
          <FeatureSlider onChange={setPopularValue} name="popular" />
          <FeatureSlider onChange={setLiveRecordingValue} name="live" />
        </Widget>
      </div>
      <Widget sx={{ padding: 0 }}>
        {tracks !== undefined && <Recommendations tracks={tracks} />}
      </Widget>
    </>
  );
};
