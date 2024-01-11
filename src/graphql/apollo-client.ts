import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

const bitQueryApiKey = process.env.NUXT_APP_BITQUERY_API_KEY;

const httpLink = new HttpLink({
    uri: "https://streaming.bitquery.io/graphql",
    headers: {
        "X-API-KEY": bitQueryApiKey as string,
    },
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

export default apolloClient;
