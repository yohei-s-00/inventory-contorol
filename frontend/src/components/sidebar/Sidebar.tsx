import { memo } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { SidebarList } from "./SidebarList";

type Props = {
  active: boolean;
  setActive: (active: boolean) => void;
};
export const Sidebar = memo((props: Props) => {
  const handleClose = () => [
    props.setActive(false)
  ]
  return (
    <>
      <Drawer
        isOpen={props.active}
        placement='left'
        onClose={handleClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>MENU</DrawerHeader>

          <DrawerBody>
            <SidebarList handleClose={handleClose}/>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  );
});
