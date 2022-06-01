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
} from "@chakra-ui/react";
import { OrderFragment } from "graphql/generated.graphql";
import { VFC } from "react";

type Props = {
  order: OrderFragment;
};

export const OrderModal: VFC<Props> = ({ order }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>発注する</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>注文内容</ModalHeader>
          <ModalCloseButton />
          {order && (
            <ModalBody>
              <Box>{order.sendAdress && order.sendAdress}</Box>
              <Box mt="1" fontWeight="semibold" as="h4">
                {order.title && order.title}
              </Box>
              <Box>{order.mailContent && order.mailContent}</Box>
            </ModalBody>
          )}

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button colorScheme="blue">送信</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
