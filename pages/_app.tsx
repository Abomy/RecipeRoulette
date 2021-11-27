import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import { UserProvider } from '@auth0/nextjs-auth0';

import { Theme } from '../lib/theme';
import { AppProps } from 'next/app';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/api',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider theme={Theme}>
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
