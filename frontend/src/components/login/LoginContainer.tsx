import { LoginForm } from "./LoginForm";
import { Text } from "@chakra-ui/react";

export const LoginContainer = () => {
  return (
    <>
      <Text as="h1" fontSize="xl">Login</Text>
      <LoginForm />
    </>
  );
};
