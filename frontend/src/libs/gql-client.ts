import {
  createClient,
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from "urql";
import { getGraphqlEndpoint } from "./site";

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });
const client = createClient({
  url: getGraphqlEndpoint(),
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetchOptions: () => {
    return { headers: {} };
  },
});

export { client, ssrCache };