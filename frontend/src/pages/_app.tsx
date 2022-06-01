import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { Layout } from "components/layout/Layout";
import { RecoilRoot } from "recoil";
import { Provider } from "urql";
import { client, ssrCache } from '../libs/gql-client'

// import { AuthProvider } from "components/auth/AuthProvider";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }
  return (
    <RecoilRoot>
      <Provider value={client}>
        <ChakraProvider>
          <CSSReset />
          {/* <AuthProvider> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
          {/* </AuthProvider> */}
        </ChakraProvider>
      </Provider>
    </RecoilRoot>
  );
}

export default MyApp;
