import {
  Client,
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from "urql";
import { authExchange } from "@urql/exchange-auth";
import { authConfig } from "./auth-config";
import { getGraphqlEndpoint } from "./site";

// const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export function AuthClient(): Client {
  const client = createClient({
    url: getGraphqlEndpoint(),
    exchanges: [
      dedupExchange,
      cacheExchange,
      authExchange(authConfig),
      fetchExchange,
    ],
  });
  return client
}
