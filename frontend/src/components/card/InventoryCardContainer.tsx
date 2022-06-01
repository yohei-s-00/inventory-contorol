import { InventoryCard } from "./InventoryCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { InventoryFragment } from "graphql/generated.graphql";

type Props = {
  inventories: InventoryFragment[];
};

export const InventoryCardContainer = (props: Props) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {props.inventories.map((inventory) => (
        <GridItem w="100%" key={inventory.id}>
          <InventoryCard inventory={inventory} />
        </GridItem>
      ))}
    </Grid>
  );
};
