import React from 'react'
import fetch from 'isomorphic-fetch'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const App = ({ Component, pageProps }): JSX.Element => {
  const cache = new InMemoryCache()
  const link = new HttpLink({
    fetch,
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  })

  const client = new ApolloClient({
    link,
    cache,
  })

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </React.StrictMode>
  )
}

export default App