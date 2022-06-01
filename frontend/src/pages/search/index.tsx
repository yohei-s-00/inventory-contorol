import { Box } from "@chakra-ui/react";
import { InventoryCardContainer } from "components/card/InventoryCardContainer";
import { TagModal } from "components/modal/TagModal";
import {
  GetInventoryDocument,
  useGetInventoryQuery,
} from "graphql/generated.graphql";
import { client, ssrCache } from "libs/gql-client";
import { getGraphqlEndpoint } from "libs/site";
import { GetServerSideProps, NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useEffect, useState } from "react";

type Props = {
  keyword: string | null;
  type: string[] | null;
};

const SearchPage: NextPage<Props> = ({ keyword, type }) => {
  const [result] = useGetInventoryQuery();
  const { data, error } = result;
  const [resultData, setResultData] = useState(data?.inventories);
  useEffect(() => {
    const getSearchResult = () => {
      // const result = data?.inventories
      const result = data?.inventories?.filter((inventory) => {
        if (data && data.inventories) {
          if (keyword && type) {
            if (inventory.name === keyword && type.includes(inventory.type)) {
              return true;
            }
            return false
          }
          if (keyword) {
            if (inventory.name === keyword) {
              return true;
            }
            return false
          }
          if (type) {
            if (type.includes(inventory.type)) {
              return true;
            }
            return false
          }
        }
        return true;
      });
      return result;
    };
    setResultData(getSearchResult());
  }, [keyword,type]);

  return (
    <Box>
      <Box>検索結果: {keyword}{type}</Box>
      {error && <Box>Error</Box>}
      {resultData && <InventoryCardContainer inventories={resultData} />}
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const keyword = context.query.keyword
      ? context.query.keyword.toString()
      : null;
    const type = context.query.type ? context.query.type : null;
    await client.query(GetInventoryDocument, {}).toPromise();
    return {
      props: {
        urqlState: ssrCache.extractData(),
        keyword: keyword,
        type: type,
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
)(SearchPage);
// export default SearchPage;
