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
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Artist = {
  __typename?: 'Artist';
  genres?: Maybe<Array<Maybe<Genre>>>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type ArtistsResult = {
  __typename?: 'ArtistsResult';
  result?: Maybe<Array<Maybe<Artist>>>;
};

export type AudioFeatures = {
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

export type Genre = {
  __typename?: 'Genre';
  name?: Maybe<Scalars['String']>;
};

export type GenresResult = {
  __typename?: 'GenresResult';
  result?: Maybe<Array<Maybe<Genre>>>;
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  artists?: Maybe<ArtistsResult>;
  genres?: Maybe<GenresResult>;
  recommendations?: Maybe<RecommendationsResult>;
  songs?: Maybe<SongsResult>;
};


export type QueryArtistsArgs = {
  searchString: Scalars['String'];
};


export type QueryRecommendationsArgs = {
  audioFeatures?: InputMaybe<AudioFeatures>;
  seedGenres?: InputMaybe<Scalars['String']>;
};


export type QuerySongsArgs = {
  searchString: Scalars['String'];
};

export type RecommendationsResult = {
  __typename?: 'RecommendationsResult';
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type SongsResult = {
  __typename?: 'SongsResult';
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type Track = {
  __typename?: 'Track';
  album?: Maybe<Album>;
  artists?: Maybe<Array<Maybe<Scalars['String']>>>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  disc_number?: Maybe<Scalars['Int']>;
  duration_human?: Maybe<Scalars['String']>;
  duration_ms?: Maybe<Scalars['Float']>;
  explicit?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  preview_url?: Maybe<Scalars['String']>;
  track_number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type GetGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenresQuery = { __typename?: 'Query', genres?: { __typename?: 'GenresResult', result?: Array<{ __typename?: 'Genre', name?: string | null } | null> | null } | null };

export type SearchArtistsQueryVariables = Exact<{
  searchString: Scalars['String'];
}>;


export type SearchArtistsQuery = { __typename?: 'Query', artists?: { __typename?: 'ArtistsResult', result?: Array<{ __typename?: 'Artist', id?: string | null, name?: string | null, images?: Array<{ __typename?: 'Image', url?: string | null, height?: number | null, width?: number | null } | null> | null, genres?: Array<{ __typename?: 'Genre', name?: string | null } | null> | null } | null> | null } | null };

export type LoadRecommendationsQueryVariables = Exact<{
  features?: InputMaybe<AudioFeatures>;
  genres?: InputMaybe<Scalars['String']>;
}>;


export type LoadRecommendationsQuery = { __typename?: 'Query', recommendations?: { __typename?: 'RecommendationsResult', tracks?: Array<{ __typename?: 'Track', artists?: Array<string | null> | null, name?: string | null, duration_human?: string | null, popularity?: number | null, preview_url?: string | null, href?: string | null, uri?: string | null, album?: { __typename?: 'Album', name?: string | null } | null } | null> | null } | null };


export const GetGenresDocument = gql`
    query getGenres {
  genres {
    result {
      name
    }
  }
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
export const SearchArtistsDocument = gql`
    query searchArtists($searchString: String!) {
  artists(searchString: $searchString) {
    result {
      id
      images {
        url
        height
        width
      }
      name
      genres {
        name
      }
    }
  }
}
    `;

/**
 * __useSearchArtistsQuery__
 *
 * To run a query within a React component, call `useSearchArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchArtistsQuery({
 *   variables: {
 *      searchString: // value for 'searchString'
 *   },
 * });
 */
export function useSearchArtistsQuery(baseOptions: Apollo.QueryHookOptions<SearchArtistsQuery, SearchArtistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchArtistsQuery, SearchArtistsQueryVariables>(SearchArtistsDocument, options);
      }
export function useSearchArtistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchArtistsQuery, SearchArtistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchArtistsQuery, SearchArtistsQueryVariables>(SearchArtistsDocument, options);
        }
export type SearchArtistsQueryHookResult = ReturnType<typeof useSearchArtistsQuery>;
export type SearchArtistsLazyQueryHookResult = ReturnType<typeof useSearchArtistsLazyQuery>;
export type SearchArtistsQueryResult = Apollo.QueryResult<SearchArtistsQuery, SearchArtistsQueryVariables>;
export const LoadRecommendationsDocument = gql`
    query loadRecommendations($features: AudioFeatures, $genres: String) {
  recommendations(audioFeatures: $features, seedGenres: $genres) {
    tracks {
      artists
      album {
        name
      }
      name
      duration_human
      popularity
      preview_url
      href
      uri
    }
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
 *      features: // value for 'features'
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
    searchArtists: 'searchArtists',
    loadRecommendations: 'loadRecommendations'
  }
}