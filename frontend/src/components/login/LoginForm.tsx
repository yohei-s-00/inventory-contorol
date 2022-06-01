import { useRecoilState } from "recoil";
import { isLoggedInState } from "atom/isLoggedIn";
import { useForm, NestedValue } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  useCreateUserMutation,
  useLoginUserMutation,
  LoginUserInput,
  UserModel,
} from "graphql/generated.graphql";
import { useRouter } from "next/router";


const defaultValues: LoginUserInput = {
  email: "",
  // name: "",
  password: "",
};

export const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [createUserResult, createUser]  = useCreateUserMutation();
  const [loginuserResult, loginUser] = useLoginUserMutation();
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultValues,
  });

  function onSubmit(values: LoginUserInput) {
    loginUser({
      // name: values.name,
      email: values.email,
      password: values.password,
    })
    setIsLoggedIn(true);
    router.push('/')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <FormControl isInvalid={errors.name ? true : false}>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input
          id="name"
          placeholder="name"
          {...register("name", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl> */}
      <FormControl isInvalid={errors.email ? true : false}>
        <FormLabel htmlFor="email">email</FormLabel>
        <Input
          id="email"
          placeholder="email"
          {...register("email", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password ? true : false}>
        <FormLabel htmlFor="password">password</FormLabel>
        <Input
          id="password"
          placeholder="password"
          {...register("password", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};
