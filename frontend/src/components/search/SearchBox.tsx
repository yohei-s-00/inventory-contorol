import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

type SearchKeyWordForm = {
  keyword: string
  // type: string;
}

export const SearchBox = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SearchKeyWordForm>();

  const onSubmit: SubmitHandler<SearchKeyWordForm> = (data) => {
    router.push({
      pathname: '/search',
      query: { keyword: data.keyword, },
    });
    setValue("keyword","")
  };
  return (
    <>
      <Controller
        name="keyword"
        control={control}
        render={({ field }) => (
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input {...field} width="500px" placeholder="search"/>
            <InputRightElement>
              <Button onClick={handleSubmit(onSubmit)}>検索</Button>
            </InputRightElement>
          </InputGroup>
        )}
      />
    </>
  );
};
