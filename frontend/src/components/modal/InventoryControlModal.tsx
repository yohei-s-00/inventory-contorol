import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Grid,
  GridItem,
  Center,
  Input,
  IconButton,
  FormControl,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { VFC } from "react";
import { useUpdateInventoryMutation } from "graphql/generated.graphql";

type ItemValue = {
  inventoryItems: number;
  requiredItems: number;
}

type Props = {
  id: string;
  inventoryItems: number;
  requiredItems: number;
}

export const InventoryControlModal: VFC<Props> = ({
  id,
  inventoryItems,
  requiredItems,
}) => {
  const [updateInventoryResult, updateInventory] = useUpdateInventoryMutation()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      inventoryItems: inventoryItems,
      requiredItems: requiredItems,
    },
  });
  function onSubmit(values: ItemValue) {
    updateInventory({
      "where": {
        "id": id,
      },
      "data": {
        "inventoryItems": values.inventoryItems,
        "requiredItems": values.requiredItems,
      }
    })
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen}>在庫数管理</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>在庫管理</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
              >
                <GridItem>
                  <Center>保持在庫数:</Center>
                </GridItem>
                <GridItem>
                  <Center></Center>
                </GridItem>
                <GridItem>
                  <Center>必要在庫数:</Center>
                </GridItem>

                <GridItem>
                  <Center>
                    <IconButton
                      aria-label="Add"
                      icon={<ArrowLeftIcon />}
                      onClick={() => {
                        const values = getValues("inventoryItems");
                        setValue("inventoryItems", values + 1);
                      }}
                    />
                    <FormControl isInvalid={errors.inventoryItems ? true : false}>
                      <Input
                        textAlign="center"
                        htmlSize={2}
                        width="auto"
                        {...register("inventoryItems", { min: 0 })}
                      />
                    </FormControl>
                    <IconButton
                      aria-label="Add"
                      icon={<ArrowRightIcon />}
                      onClick={() => {
                        const values = getValues("inventoryItems");
                        setValue("inventoryItems", values - 1);
                      }}
                    />
                  </Center>
                </GridItem>
                <GridItem>
                  <Center>/</Center>
                </GridItem>
                <GridItem>
                  <Center>
                    <IconButton
                      aria-label="Add"
                      icon={<ArrowLeftIcon />}
                      onClick={() => {
                        const values = getValues("requiredItems");
                        setValue("requiredItems", values + 1);
                      }}
                    />
                    <FormControl isInvalid={errors.requiredItems ? true : false}>
                      <Input
                        textAlign="center"
                        htmlSize={2}
                        width="auto"
                        // value={requiredVolume}
                        {...register("requiredItems", { min: 0 })}
                      />
                    </FormControl>
                    <IconButton
                      aria-label="Add"
                      icon={<ArrowRightIcon />}
                      onClick={() => {
                        const values = getValues("inventoryItems");
                        setValue("requiredItems", values - 1);
                      }}
                    />
                  </Center>
                </GridItem>
              </Grid>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={()=>{onClose();reset();}}>
                閉じる
              </Button>
              <Button colorScheme="blue" isLoading={isSubmitting} type="submit">
                更新
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
