import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost/graphql",
  documents: ["documents/**/*.graphql"],
  // ignoreNoDocuments: true,
  generates: {
    "generates/gql/": {
      preset: "client",
    },
  },
};

export default config;
