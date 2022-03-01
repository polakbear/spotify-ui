import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://gql-spotify.herokuapp.com/api',
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);
