import {
  useInventoryDetailPageQuery,
  GetInventoryDocument,
} from "graphql/generated.graphql";
import { GetServerSideProps, NextPage } from "next";
import { Box, Badge, Flex } from "@chakra-ui/react";
import { OrderModal } from "components/modal/OrderModal";
import { SSRData, withUrqlClient } from "next-urql";
import { getGraphqlEndpoint } from "libs/site";
import { InventoryControlModal } from "components/modal/InventoryControlModal";
import { client, ssrCache } from "libs/gql-client";

type Props = {
  urqlState: SSRData;
  name: string;
};

const ItemPage: NextPage<Props> = ({ name }) => {
  const [result] = useInventoryDetailPageQuery({
    variables: { name: name },
  });
  const { data, error } = result;
  return (
    <Box>
      {data && (
        <Flex gap={6}>
          <Box bg="tomato" w="300px" h="300px" />
          <Box>
            <Box>
              <Badge borderRadius="full" px="2" color="teal">
                {data.inventory.type}
              </Badge>
              <Box as="h1" fontWeight="bold" fontSize="4xl">
                {data.inventory.name}
              </Box>
              <Box>単価:¥{data.inventory.price}</Box>
              <Box>部品番号:{data.inventory.orderCode}</Box>
              <Box>
                保持在庫数:{data.inventory.inventoryItems} / 必要在庫数:
                {data.inventory.requiredItems}
              </Box>
            </Box>
            <Box mt={2}>
              <InventoryControlModal
                id={data.inventory.id}
                inventoryItems={data.inventory.inventoryItems}
                requiredItems={data.inventory.requiredItems}
              />
            </Box>
            <Box mt={4}>
              <OrderModal order={data.inventory.order[0]} />
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  try {
    const stringToName = () => {
      if (
        typeof context.params !== "undefined" &&
        typeof context.params.name !== "undefined"
      ) {
        return context.params.name.toString();
      } else {
        throw new Error();
      }
    };
    const name = stringToName();
    await client.query(GetInventoryDocument, { name: name }).toPromise();
    return {
      props: {
        urqlState: ssrCache.extractData(),
        name: name,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};

export default withUrqlClient(
  (ssr) => ({
    url: getGraphqlEndpoint(),
  }),
  { ssr: false }
)(ItemPage);
