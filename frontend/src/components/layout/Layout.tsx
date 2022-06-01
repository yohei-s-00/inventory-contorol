import { ReactElement, useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import { Header } from "components/header/Header"
import { Sidebar } from "components/sidebar/Sidebar";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;
export const Layout = ({ children }: LayoutProps) => {
  const [ active, setActive ] = useState<boolean>(false)
  return (
    <>
    <Header setActive={setActive} active={active}/>
    <Sidebar setActive={setActive} active={active}/>
      <main>
        <Container py={6} maxW='container.lg'>{children}</Container>
      </main>
    </>
  );
};
