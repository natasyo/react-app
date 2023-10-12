/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetMainMenu {\n  menuItems(where: {location: PRIMARY}) {\n    edges {\n      node {\n        label\n        path\n      }\n    }\n  }\n}": types.GetMainMenuDocument,
    "query getPost($slug: String) {\n  postBy(slug: $slug) {\n    id\n    content\n    date\n    featuredImage {\n      node {\n        id\n        altText\n        mediaDetails {\n          height\n          width\n        }\n        guid\n        title\n      }\n    }\n    title\n  }\n}": types.GetPostDocument,
    "query GetPosts($first: Int) {\n  posts(first: $first) {\n    edges {\n      node {\n        id\n        date\n        title\n        uri\n        excerpt\n        isPreview\n        slug\n        featuredImage {\n          node {\n            guid\n            link\n            caption\n            mediaDetails {\n              height\n              width\n            }\n            altText\n          }\n        }\n      }\n    }\n  }\n}": types.GetPostsDocument,
    "query GetQuestions {\n  questions {\n    nodes {\n      title\n      content\n    }\n  }\n}": types.GetQuestionsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMainMenu {\n  menuItems(where: {location: PRIMARY}) {\n    edges {\n      node {\n        label\n        path\n      }\n    }\n  }\n}"): (typeof documents)["query GetMainMenu {\n  menuItems(where: {location: PRIMARY}) {\n    edges {\n      node {\n        label\n        path\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getPost($slug: String) {\n  postBy(slug: $slug) {\n    id\n    content\n    date\n    featuredImage {\n      node {\n        id\n        altText\n        mediaDetails {\n          height\n          width\n        }\n        guid\n        title\n      }\n    }\n    title\n  }\n}"): (typeof documents)["query getPost($slug: String) {\n  postBy(slug: $slug) {\n    id\n    content\n    date\n    featuredImage {\n      node {\n        id\n        altText\n        mediaDetails {\n          height\n          width\n        }\n        guid\n        title\n      }\n    }\n    title\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPosts($first: Int) {\n  posts(first: $first) {\n    edges {\n      node {\n        id\n        date\n        title\n        uri\n        excerpt\n        isPreview\n        slug\n        featuredImage {\n          node {\n            guid\n            link\n            caption\n            mediaDetails {\n              height\n              width\n            }\n            altText\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetPosts($first: Int) {\n  posts(first: $first) {\n    edges {\n      node {\n        id\n        date\n        title\n        uri\n        excerpt\n        isPreview\n        slug\n        featuredImage {\n          node {\n            guid\n            link\n            caption\n            mediaDetails {\n              height\n              width\n            }\n            altText\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetQuestions {\n  questions {\n    nodes {\n      title\n      content\n    }\n  }\n}"): (typeof documents)["query GetQuestions {\n  questions {\n    nodes {\n      title\n      content\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;