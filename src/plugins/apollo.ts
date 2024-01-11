import { provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "../graphql/apollo-client";

export default defineNuxtPlugin(() => {
    provideApolloClient(apolloClient);
});
