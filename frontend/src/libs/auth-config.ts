import { AuthConfig } from "@urql/exchange-auth";
import { makeOperation } from "urql";
import { RefreshTokenDocument, useLogoutUserMutation } from "graphql/generated.graphql";

export type Tokens = {
  access_token: string;
  refresh_token: string;
};
const isServer = typeof window !== 'undefined';

export const authConfig: AuthConfig<Tokens> = {
  //authの状態確認
  getAuth: async ({ authState, mutate }) => {
    if (!authState && isServer) {
      const access_token = localStorage.getItem("access_token");
      const refresh_token = localStorage.getItem("refresh_token");
      if (access_token && refresh_token) {
        return { access_token, refresh_token };
      }
      return null;
    }
    const result = await mutate(RefreshTokenDocument,{
      // access_token: authState!.refresh_token,
      access_token: authState!.access_token,
    }
    );
    if (result.data?.refreshLogin) {
      localStorage.setItem('access_token', result.data.refreshLogin.access_token);
      localStorage.setItem('refresh_token', result.data.refreshLogin.refresh_token);
  
      return {
        access_token: result.data.refreshLogin.access_token,
        refresh_token: result.data.refreshLogin.refresh_token,
      };
    }
  
    // This is where auth has gone wrong and we need to clean up and redirect to a login page
    localStorage.clear();
    useLogoutUserMutation();
    return null;
  },
  //事前にエラーになる場合の処理
  willAuthError: ({ operation, authState}) => {
    if (!authState) return true
    return false
  },
  //認証状態を返却する
  addAuthToOperation: ({ authState, operation }) => {
    if (!authState || !authState.access_token) {
      return operation;
    }

    const fetchOptions =
      typeof operation.context.fetchOptions === "function"
        ? operation.context.fetchOptions()
        : operation.context.fetchOptions || {};

    return makeOperation(operation.kind, operation, {
      ...operation.context,
      fetchOptions: {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: "Bearer " + authState.access_token,
        },
      },
    });
  },
};
