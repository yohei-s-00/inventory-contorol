import type { GetServerSideProps, NextPage } from "next";
import { GetInventoryDocument, useGetInventoryQuery, } from "graphql/generated.graphql";
import { InventoryCardContainer } from "components/card/InventoryCardContainer";
import { Box } from "@chakra-ui/react";
import { SSRData, withUrqlClient} from "next-urql";
import { client, ssrCache } from "libs/gql-client";
import { getGraphqlEndpoint } from "libs/site";

const Home: NextPage = () => {
  const [ result ] = useGetInventoryQuery()
  const { data, error } = result;
  return (
    <Box>
      {error && <Box>Error</Box>}
      {data?.inventories && <InventoryCardContainer inventories={data.inventories}/>}
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<SSRData> = async () => {
  await client.query(GetInventoryDocument, {}).toPromise();
  return { props: { urqlState: ssrCache.extractData() } };
};
export default withUrqlClient(
  (ssr) => ({
    url: getGraphqlEndpoint(),
  }),
  { ssr: false }
)(Home);
// export default Home;
