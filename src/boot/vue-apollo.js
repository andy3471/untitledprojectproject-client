import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: process.env.GRQPHQL_API
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export default async ({ Vue, app }) => {
  Vue.use(VueApollo);
  app.apolloProvider = apolloProvider;
};
