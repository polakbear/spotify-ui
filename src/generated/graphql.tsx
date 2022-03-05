import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = {
  __typename?: 'Album';
  artists?: Maybe<Array<Maybe<Artist>>>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  href?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images: Array<Image>;
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  release_date: Scalars['String'];
};

export type Artist = {
  __typename?: 'Artist';
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  href: Scalars['String'];
  id: Scalars['String'];
  images: Array<Maybe<Image>>;
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type ArtistImageMap = {
  __typename?: 'ArtistImageMap';
  id: Scalars['String'];
  img: Scalars['String'];
};

export type ArtistsResult = {
  __typename?: 'ArtistsResult';
  result?: Maybe<Array<Maybe<Artist>>>;
};

export type AudioFeatures = {
  __typename?: 'AudioFeatures';
  acousticness: Scalars['Float'];
  danceability: Scalars['Float'];
  duration_ms: Scalars['Int'];
  energy: Scalars['Float'];
  id: Scalars['String'];
  instrumentalness: Scalars['Float'];
  key: Scalars['Int'];
  liveness: Scalars['Float'];
  loudness: Scalars['Float'];
  mode: Scalars['Int'];
  speechiness: Scalars['Float'];
  tempo: Scalars['Float'];
  track_href: Scalars['String'];
  uri: Scalars['String'];
  valence: Scalars['Float'];
};

export type AudioOptions = {
  analysis_url?: InputMaybe<Scalars['String']>;
  duration_ms?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['Int']>;
  max__speechiness?: InputMaybe<Scalars['Float']>;
  max_acousticness?: InputMaybe<Scalars['Float']>;
  max_danceability?: InputMaybe<Scalars['Float']>;
  max_energy?: InputMaybe<Scalars['Float']>;
  max_instrumentalness?: InputMaybe<Scalars['Float']>;
  max_liveness?: InputMaybe<Scalars['Float']>;
  max_loudness?: InputMaybe<Scalars['Float']>;
  max_popularity?: InputMaybe<Scalars['Int']>;
  max_valence?: InputMaybe<Scalars['Float']>;
  min_acousticness?: InputMaybe<Scalars['Float']>;
  min_danceability?: InputMaybe<Scalars['Float']>;
  min_energy?: InputMaybe<Scalars['Float']>;
  min_instrumentalness?: InputMaybe<Scalars['Float']>;
  min_liveness?: InputMaybe<Scalars['Float']>;
  min_loudness?: InputMaybe<Scalars['Float']>;
  min_popularity?: InputMaybe<Scalars['Int']>;
  min_speechiness?: InputMaybe<Scalars['Float']>;
  min_valence?: InputMaybe<Scalars['Float']>;
  mode?: InputMaybe<Scalars['Int']>;
  tempo?: InputMaybe<Scalars['Int']>;
};

export type ExternalUrl = {
  __typename?: 'ExternalURL';
  spotify: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  artist: Artist;
  artists: Array<Artist>;
  audioFeatures: AudioFeatures;
  genres: Array<Scalars['String']>;
  recommendations: Array<Maybe<Track>>;
};


export type QueryArtistArgs = {
  artistId: Scalars['String'];
};


export type QueryArtistsArgs = {
  artistIds: Array<Scalars['String']>;
};


export type QueryAudioFeaturesArgs = {
  id: Scalars['String'];
};


export type QueryRecommendationsArgs = {
  audioOptions?: InputMaybe<AudioOptions>;
  seedGenres?: InputMaybe<Scalars['String']>;
};

export type RecommendationsResult = {
  __typename?: 'RecommendationsResult';
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type SimplifiedAlbum = {
  __typename?: 'SimplifiedAlbum';
  artists?: Maybe<Array<Maybe<SimplifiedArtist>>>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  href?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images: Array<Image>;
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  release_date: Scalars['String'];
};

export type SimplifiedArtist = {
  __typename?: 'SimplifiedArtist';
  external_urls?: Maybe<Array<Maybe<ExternalUrl>>>;
  href: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type SongsResult = {
  __typename?: 'SongsResult';
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type Track = {
  __typename?: 'Track';
  album: SimplifiedAlbum;
  artist_display: Scalars['String'];
  artists: Array<SimplifiedArtist>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  disc_number?: Maybe<Scalars['Int']>;
  duration_human?: Maybe<Scalars['String']>;
  duration_ms?: Maybe<Scalars['Float']>;
  explicit?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  popularity?: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
};

export type GetGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenresQuery = { __typename?: 'Query', genres: Array<string> };

export type AudioFeaturesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AudioFeaturesQuery = { __typename?: 'Query', audioFeatures: { __typename?: 'AudioFeatures', acousticness: number, danceability: number, duration_ms: number, energy: number, liveness: number, instrumentalness: number, speechiness: number, loudness: number, tempo: number } };

export type LoadRecommendationsQueryVariables = Exact<{
  audioOptions?: InputMaybe<AudioOptions>;
  genres?: InputMaybe<Scalars['String']>;
}>;


export type LoadRecommendationsQuery = { __typename?: 'Query', recommendations: Array<{ __typename?: 'Track', name: string, duration_human?: string | null, popularity?: number | null, href?: string | null, uri: string, artist_display: string, id: string, artists: Array<{ __typename?: 'SimplifiedArtist', name: string, id: string }>, album: { __typename?: 'SimplifiedAlbum', name: string, release_date: string, images: Array<{ __typename?: 'Image', url?: string | null }> } } | null> };


export const GetGenresDocument = gql`
    query getGenres {
  genres
}
    `;

/**
 * __useGetGenresQuery__
 *
 * To run a query within a React component, call `useGetGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGenresQuery(baseOptions?: Apollo.QueryHookOptions<GetGenresQuery, GetGenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, options);
      }
export function useGetGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenresQuery, GetGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, options);
        }
export type GetGenresQueryHookResult = ReturnType<typeof useGetGenresQuery>;
export type GetGenresLazyQueryHookResult = ReturnType<typeof useGetGenresLazyQuery>;
export type GetGenresQueryResult = Apollo.QueryResult<GetGenresQuery, GetGenresQueryVariables>;
export const AudioFeaturesDocument = gql`
    query audioFeatures($id: String!) {
  audioFeatures(id: $id) {
    acousticness
    danceability
    duration_ms
    energy
    liveness
    instrumentalness
    speechiness
    loudness
    tempo
  }
}
    `;

/**
 * __useAudioFeaturesQuery__
 *
 * To run a query within a React component, call `useAudioFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAudioFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAudioFeaturesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAudioFeaturesQuery(baseOptions: Apollo.QueryHookOptions<AudioFeaturesQuery, AudioFeaturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AudioFeaturesQuery, AudioFeaturesQueryVariables>(AudioFeaturesDocument, options);
      }
export function useAudioFeaturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AudioFeaturesQuery, AudioFeaturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AudioFeaturesQuery, AudioFeaturesQueryVariables>(AudioFeaturesDocument, options);
        }
export type AudioFeaturesQueryHookResult = ReturnType<typeof useAudioFeaturesQuery>;
export type AudioFeaturesLazyQueryHookResult = ReturnType<typeof useAudioFeaturesLazyQuery>;
export type AudioFeaturesQueryResult = Apollo.QueryResult<AudioFeaturesQuery, AudioFeaturesQueryVariables>;
export const LoadRecommendationsDocument = gql`
    query loadRecommendations($audioOptions: AudioOptions, $genres: String) {
  recommendations(audioOptions: $audioOptions, seedGenres: $genres) {
    artists {
      name
      id
    }
    album {
      name
      images {
        url
      }
      release_date
    }
    name
    duration_human
    popularity
    href
    uri
    artist_display
    id
  }
}
    `;

/**
 * __useLoadRecommendationsQuery__
 *
 * To run a query within a React component, call `useLoadRecommendationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadRecommendationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadRecommendationsQuery({
 *   variables: {
 *      audioOptions: // value for 'audioOptions'
 *      genres: // value for 'genres'
 *   },
 * });
 */
export function useLoadRecommendationsQuery(baseOptions?: Apollo.QueryHookOptions<LoadRecommendationsQuery, LoadRecommendationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoadRecommendationsQuery, LoadRecommendationsQueryVariables>(LoadRecommendationsDocument, options);
      }
export function useLoadRecommendationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoadRecommendationsQuery, LoadRecommendationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoadRecommendationsQuery, LoadRecommendationsQueryVariables>(LoadRecommendationsDocument, options);
        }
export type LoadRecommendationsQueryHookResult = ReturnType<typeof useLoadRecommendationsQuery>;
export type LoadRecommendationsLazyQueryHookResult = ReturnType<typeof useLoadRecommendationsLazyQuery>;
export type LoadRecommendationsQueryResult = Apollo.QueryResult<LoadRecommendationsQuery, LoadRecommendationsQueryVariables>;
export const namedOperations = {
  Query: {
    getGenres: 'getGenres',
    audioFeatures: 'audioFeatures',
    loadRecommendations: 'loadRecommendations'
  }
}