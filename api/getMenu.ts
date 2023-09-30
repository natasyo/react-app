import { fetchData } from "@/api/apolloClient.ts";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

export const getMenu = async () => {
  const query = gql`
    query menuPrimary {
      menuItems(where: { location: PRIMARY }) {
        edges {
          node {
            label
            path
          }
        }
      }
    }
  `;
  // return (await fetchData(query)).menuItems.edges;
  const data = await fetchData(query);
  return data.data.menuItems.edges;
};
