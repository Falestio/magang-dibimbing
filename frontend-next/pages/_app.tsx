import { ApolloProvider } from '@apollo/client';
import createApolloClient from '../lib/apolloClient';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'

const apolloClient = createApolloClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
