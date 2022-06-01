import {
  List,
  ListItem,
  ListIcon,
  Box,
} from "@chakra-ui/react";
import {
  SettingsIcon,
  SearchIcon,
  ArrowBackIcon,
  UnlockIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "atom/isLoggedIn";
import { useLogoutUserMutation } from "graphql/generated.graphql";
import { useRouter } from "next/router";
import { memo } from "react";

type Props = {
  handleClose: () => void[]
}

export const SidebarList = memo((props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [ logoutUserResult, logoutUser ] = useLogoutUserMutation();
  const router = useRouter()

  const handleLogout = () => {
    logoutUser()
    setIsLoggedIn(false)
    props.handleClose()
    router.push({ pathname: '/login'})
  }
  return (
    <List spacing={3}>
      
      {isLoggedIn 
      ?
      <ListItem>
        <Box onClick={handleLogout}>
          <ListIcon as={UnlockIcon} color="green.500" />
          LOGOUT
        </Box>
      </ListItem> 
      : 
      <ListItem>
      <Link href={"/login"}>
        <a onClick={() => props.handleClose()}>
          <ListIcon as={UnlockIcon} color="green.500" />
          LOGIN
        </a>
      </Link>
    </ListItem>
      }
      
      <ListItem>
        <Link href={"/"}>
          <a onClick={() => props.handleClose()}>
            <ListIcon as={ArrowBackIcon} color="green.500" />
            HOME
          </a>
        </Link>
      </ListItem>
      <ListItem>
        <Link href={"/search"}>
          <a onClick={() => props.handleClose()}>
            <ListIcon as={SearchIcon} color="green.500" />
            検索
          </a>
        </Link>
      </ListItem>
      <ListItem>
        <Link href={"/admin"}>
          <a onClick={() => props.handleClose()}>
            <ListIcon as={SettingsIcon} color="green.500" />
            管理画面
          </a>
        </Link>
      </ListItem>
    </List>
  );
});
