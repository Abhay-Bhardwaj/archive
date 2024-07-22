import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV !== "production") {
  loadDevMessages();
  loadErrorMessages();
}

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

export const GET_ARCHIVE_DATA = gql`
  query GetArchiveData($albumsPage: Int!, $limit: Int!) {
   
    albums(options: { paginate: { page: $albumsPage, limit: $limit } }) {
      data {
        id
        title
        user {
          id
          name
        }
        photos {
          data {
            id
            title
            url
            
          }
        }
      }
    }
  }
`;

export { client, ApolloProvider };
