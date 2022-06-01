const NEXT_PUBLIC_GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;
export function getGraphqlEndpoint(): string {
  return NEXT_PUBLIC_GRAPHQL_ENDPOINT;
}
