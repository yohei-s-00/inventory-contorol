import { CheckIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState, VFC } from "react";

export const TagModal: VFC = () => {
  const router = useRouter()
  const [ value , setValue ] = useState<string[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Tags = ["delivaly", "feeder", "parts"];
  const handleSubmit = () => {
    router.push({
      pathname: '/search',
      query: { type: value, },
    })
    onClose()
  }
  return (
    <>
      <Button onClick={onOpen}>タグ検索</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>タグ選択</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
              {Tags.map((tag, i) => (
                <GridItem key={i}>
                  <InputButton setValue={setValue} value={value} tag={tag} />
                </GridItem>
              ))}
            </Grid>
          </ModalBody>

          <ModalFooter>
            {value.map((v)=>(
              <Box>{v}</Box>
            ))}
            <Button variant="ghost" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit}>検索</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

type ButtonProps = {
  tag: string;
  value: string[]
  setValue: Dispatch<SetStateAction<string[]>>
}

const InputButton: VFC<ButtonProps> = ({tag,value,setValue}) => {
  const [ active, setActive ] = useState(false)
  const handleClick = (tag: string) => {
    setActive(!active);
    if(value.includes(tag)){
      setValue(
        value.filter((v)=>{
          return v !== tag;
        }
        )
      )
    }else{
      setValue([...value,tag])
    }
  }
  return (
    <Button leftIcon={<CheckIcon />} colorScheme="teal" variant={active ? "solid" : "outline"} onClick={()=>handleClick(tag)}>
      {tag}
    </Button>
  );
};
