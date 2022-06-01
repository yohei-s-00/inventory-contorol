import { Box, Badge, Image, } from "@chakra-ui/react";
import { InventoryFragment } from "graphql/generated.graphql";
import Link from "next/link";
import type { VFC } from "react";

type Props = {
  inventory: InventoryFragment;
};

export const InventoryCard: VFC<Props> = ({ inventory }) => {
  return (
    <Box>
      <Link href={`/items/${inventory.name}`}>
        <a>
          <Box
            display="block"
            w="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ boxShadow: "outline", opacity: 0.8 }}
          >
            <Box bg={inventory.inventoryItems >= inventory.requiredItems ? 'blue' : 'tomato'} w="100%" p={3}></Box>
            <Box display="flex">
              <Image
                src={inventory.thumbNailUrl ? inventory.thumbNailUrl : ""}
                fallbackSrc="https://via.placeholder.com/150"
                sizes="150px"
                objectFit="cover"
              />
              <Box p="6">
                <Box>
                  <Badge borderRadius="full" px="2" color="teal">
                    {inventory.type}
                  </Badge>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight">
                  {inventory.name}
                </Box>
                <Box>
                  {inventory.inventoryItems}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / {inventory.requiredItems}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </a>
      </Link>
    </Box>
  );
};
