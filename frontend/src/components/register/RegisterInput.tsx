import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { InventoryCreateInput, useCreateInventoryMutation } from "graphql/generated.graphql";


const defaultValues: InventoryCreateInput = {
  name: "",
  type: "",
  inventoryItems: 0,
  requiredItems: 0,
  price: 0,
  orderCode: "",
  status: "",
};

export const RegisterInput = () => {
  const [createInventoryResult, createInventory]  = useCreateInventoryMutation();
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultValues,
  });

  function onSubmit(values: InventoryCreateInput) {
    createInventory({'input': values})
    router.push('/')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name ? true : false}>
        <FormLabel htmlFor="name">name</FormLabel>
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
      </FormControl>
      <FormControl isInvalid={errors.type ? true : false}>
        <FormLabel htmlFor="type">type</FormLabel>
        <Input
          id="type"
          placeholder="type"
          {...register("type", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.type && errors.type.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.inventoryItems ? true : false}>
        <FormLabel htmlFor="inventoryItems">inventoryItems</FormLabel>
        <Input
          id="inventoryItems"
          placeholder="inventoryItems"
          // {...register("inventoryItems", {
          //   required: "This is required",
          //   minLength: { value: 4, message: "Minimum length should be 4" },
          // })}
        />
        <FormErrorMessage>
          {errors.requiredItems && errors.requiredItems.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.requiredItems ? true : false}>
        <FormLabel htmlFor="requiredItems">requiredItems</FormLabel>
        <Input
          id="requiredItems"
          placeholder="requiredItems"
          // {...register("requiredItems", {
          //   required: "This is required",
          //   minLength: { value: 4, message: "Minimum length should be 4" },
          // })}
        />
        <FormErrorMessage>
          {errors.requiredItems && errors.requiredItems.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.price ? true : false}>
        <FormLabel htmlFor="price">price</FormLabel>
        <Input
          id="price"
          placeholder="price"
          // {...register("price", {
          //   required: "This is required",
          //   minLength: { value: 4, message: "Minimum length should be 4" },
          // })}
        />
        <FormErrorMessage>
          {errors.price && errors.price.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.orderCode ? true : false}>
        <FormLabel htmlFor="orderCode">orderCode</FormLabel>
        <Input
          id="orderCode"
          placeholder="orderCode"
          {...register("orderCode", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.orderCode && errors.orderCode.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.status ? true : false}>
        <FormLabel htmlFor="statuse">status</FormLabel>
        <Input
          id="status"
          placeholder="status"
          {...register("status", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.status && errors.status.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};
