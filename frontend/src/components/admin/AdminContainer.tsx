import { Box, SimpleGrid } from "@chakra-ui/react";
import { AdminCard } from "./AdminCard";

export const AdminContainer = () => {
  const adminMenus = [
    { title: "在庫登録", stat: "新規追加", link: "/admin/register", },
    { title: "準備中", stat: "準備中", link: "", },
    { title: "準備中", stat: "準備中", link: "", },
  ];
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {adminMenus.map((adminMenu,index) => (
          <AdminCard key={index} title={adminMenu.title} stat={adminMenu.stat} link={adminMenu.link} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
