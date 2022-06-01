import { AdminContainer } from "components/admin/AdminContainer";
import { chakra } from "@chakra-ui/react";

const AdminPage = () => {
  return (
    <>
      <chakra.h1
        textAlign={"left"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        管理メニュー
      </chakra.h1>
      <AdminContainer />
    </>
  );
};
export default AdminPage;
