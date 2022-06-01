import { isLoggedInState } from "atom/isLoggedIn";
import { AuthClient } from "libs/auth";
import { useRouter } from "next/router";
import { ReactElement, useMemo } from "react";
import { useRecoilState } from "recoil";
import { createClient, Provider } from "urql";

type ProviderProps = Required<{
  readonly children: ReactElement;
}>;

export const AuthProvider = ({ children }: ProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

    const client = AuthClient();

  return <Provider value={client}>{children}</Provider>;
};
