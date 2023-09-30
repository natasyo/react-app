import { ApolloClient, InMemoryCache, DocumentNode } from "@apollo/client";
export const clientApollo = new ApolloClient({
  uri: "http://localhost/graphql",
  cache: new InMemoryCache(),
});

export async function fetchData(query: DocumentNode) {
  return await clientApollo.query({
    query,
  });
}
