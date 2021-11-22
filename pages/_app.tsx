import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";

import { Theme } from "../lib/theme";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api",
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
