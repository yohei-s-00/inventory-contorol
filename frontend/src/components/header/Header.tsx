import { memo } from "react";
import { Box, Flex, Icon, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, HamburgerIcon } from "@chakra-ui/icons";
import { SearchBox } from "components/search/SearchBox";
import { useRouter } from "next/router";
import { AiFillHome } from "react-icons/ai";
import { TagModal } from "components/modal/TagModal";

type Props = {
  active: boolean;
  setActive: (active: boolean) => void;
};

export const Header = memo((props: Props) => {
  const router = useRouter();
  const handleClick = () => {
    props.setActive(!props.active);
  };
  const handleBack = () => {
    router.back();
  };
  return (
    <header>
      <Flex p={4} gap="5" borderWidth="1px" boxShadow="sm">
        <Box>
          <IconButton
            aria-label="Hamburger"
            icon={<HamburgerIcon />}
            onClick={handleClick}
          />
        </Box>
        <Box>
          <IconButton
            aria-label="Home"
            icon={<Icon as={AiFillHome} />}
            onClick={() => router.push("/")}
          />
        </Box>
        <Box>
          <IconButton
            aria-label="Back"
            icon={<ArrowBackIcon />}
            onClick={handleBack}
          />
        </Box>
        <Box>
          <SearchBox />
        </Box>
        <Box>
          <TagModal />
        </Box>
      </Flex>
    </header>
  );
});
