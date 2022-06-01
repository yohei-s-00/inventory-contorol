import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateOrderInput = {
  inventoryId?: InputMaybe<Scalars['String']>;
  mailContent: Scalars['String'];
  sendAdress: Scalars['String'];
  sendCc: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type InventoryCreateInput = {
  inventoryItems: Scalars['Int'];
  name: Scalars['String'];
  orderCode: Scalars['String'];
  price: Scalars['Int'];
  requiredItems: Scalars['Int'];
  status: Scalars['String'];
  type: Scalars['String'];
};

export type InventoryModel = {
  __typename?: 'InventoryModel';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  inventoryItems: Scalars['Float'];
  name: Scalars['String'];
  order: Array<OrderModel>;
  orderCode: Scalars['String'];
  orderDates?: Maybe<Scalars['DateTime']>;
  price: Scalars['Float'];
  requiredItems: Scalars['Float'];
  status: Scalars['String'];
  thumbNailUrl?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type InventoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  inventoryItems?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  orderCode?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  requiredItems?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type InventoryWhereInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  refresh_token: Scalars['String'];
  user: UserModel;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrder: OrderModel;
  createInventory: InventoryModel;
  createUser: UserModel;
  login: LoginResponse;
  logout: Scalars['Boolean'];
  refreshToken: LoginResponse;
  updateInventory: InventoryModel;
};


export type MutationAddOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreateInventoryArgs = {
  input: InventoryCreateInput;
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationUpdateInventoryArgs = {
  data: InventoryUpdateInput;
  where: InventoryWhereInput;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type OrderModel = {
  __typename?: 'OrderModel';
  id: Scalars['ID'];
  inventoryId: Scalars['String'];
  mailContent: Scalars['String'];
  sendAdress: Scalars['String'];
  sendCc: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  findInventory: InventoryModel;
  inventories?: Maybe<Array<InventoryModel>>;
  inventoryCards?: Maybe<Array<InventoryModel>>;
  orders?: Maybe<Array<OrderModel>>;
  user: UserModel;
};


export type QueryFindInventoryArgs = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryOrdersArgs = {
  inventoryId?: InputMaybe<Scalars['String']>;
  sortAs?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserModel = {
  __typename?: 'UserModel';
  /** @Validator.@IsEmail() */
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UserOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  HashedRefreshToken = 'hashedRefreshToken',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  UpdatedAt = 'updatedAt'
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type InventoryFragment = { __typename?: 'InventoryModel', id: string, name: string, type: string, inventoryItems: number, requiredItems: number, price: number, status: string, orderCode: string, orderDates?: any | null, thumbNailUrl?: string | null };

export type OrderFragment = { __typename?: 'OrderModel', id: string, inventoryId: string, sendAdress: string, type: string, title: string, mailContent: string, sendCc: string };

export type GetInventoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInventoryQuery = { __typename?: 'Query', inventories?: Array<{ __typename?: 'InventoryModel', id: string, name: string, type: string, inventoryItems: number, requiredItems: number, price: number, status: string, orderCode: string, orderDates?: any | null, thumbNailUrl?: string | null }> | null, orders?: Array<{ __typename?: 'OrderModel', id: string, inventoryId: string, sendAdress: string, type: string, title: string, mailContent: string, sendCc: string }> | null };

export type GetInventoryCardQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInventoryCardQuery = { __typename?: 'Query', inventories?: Array<{ __typename?: 'InventoryModel', id: string, name: string, type: string, inventoryItems: number, requiredItems: number, price: number, status: string, orderCode: string, orderDates?: any | null, thumbNailUrl?: string | null }> | null };

export type InventoryDetailPageQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type InventoryDetailPageQuery = { __typename?: 'Query', inventory: { __typename?: 'InventoryModel', id: string, name: string, type: string, inventoryItems: number, requiredItems: number, price: number, status: string, orderCode: string, orderDates?: any | null, thumbNailUrl?: string | null, order: Array<{ __typename?: 'OrderModel', id: string, inventoryId: string, sendAdress: string, type: string, title: string, mailContent: string, sendCc: string }> } };

export type CreateInventoryMutationVariables = Exact<{
  input: InventoryCreateInput;
}>;


export type CreateInventoryMutation = { __typename?: 'Mutation', createInventory: { __typename?: 'InventoryModel', name: string } };

export type UpdateInventoryMutationVariables = Exact<{
  where: InventoryWhereInput;
  data: InventoryUpdateInput;
}>;


export type UpdateInventoryMutation = { __typename?: 'Mutation', updateInventory: { __typename?: 'InventoryModel', id: string, name: string, inventoryItems: number, requiredItems: number, updatedAt: any } };

export type UpdateItemsInventoryMutationVariables = Exact<{
  where: InventoryWhereInput;
  data: InventoryUpdateInput;
}>;


export type UpdateItemsInventoryMutation = { __typename?: 'Mutation', updateInventory: { __typename?: 'InventoryModel', inventoryItems: number, requiredItems: number } };

export type UserFragment = { __typename?: 'UserModel', id: string, name: string, email: string };

export type UserPageQueryVariables = Exact<{ [key: string]: never; }>;


export type UserPageQuery = { __typename?: 'Query', user: { __typename?: 'UserModel', id: string, name: string, email: string } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, refresh_token: string, user: { __typename?: 'UserModel', id: string, name: string, email: string } } };

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserModel', id: string, name: string, email: string } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'LoginResponse', access_token: string, refresh_token: string, user: { __typename?: 'UserModel', id: string, name: string, email: string } } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: boolean };

export const InventoryFragmentDoc = gql`
    fragment Inventory on InventoryModel {
  id
  name
  type
  inventoryItems
  requiredItems
  price
  status
  orderCode
  orderDates
  thumbNailUrl
}
    `;
export const OrderFragmentDoc = gql`
    fragment Order on OrderModel {
  id
  inventoryId
  sendAdress
  type
  title
  mailContent
  sendCc
}
    `;
export const UserFragmentDoc = gql`
    fragment User on UserModel {
  id
  name
  email
}
    `;
export const GetInventoryDocument = gql`
    query GetInventory {
  inventories {
    ...Inventory
  }
  orders {
    ...Order
  }
}
    ${InventoryFragmentDoc}
${OrderFragmentDoc}`;

export function useGetInventoryQuery(options?: Omit<Urql.UseQueryArgs<GetInventoryQueryVariables>, 'query'>) {
  return Urql.useQuery<GetInventoryQuery>({ query: GetInventoryDocument, ...options });
};
export const GetInventoryCardDocument = gql`
    query GetInventoryCard {
  inventories {
    ...Inventory
  }
}
    ${InventoryFragmentDoc}`;

export function useGetInventoryCardQuery(options?: Omit<Urql.UseQueryArgs<GetInventoryCardQueryVariables>, 'query'>) {
  return Urql.useQuery<GetInventoryCardQuery>({ query: GetInventoryCardDocument, ...options });
};
export const InventoryDetailPageDocument = gql`
    query InventoryDetailPage($name: String) {
  inventory: findInventory(name: $name) {
    ...Inventory
    order {
      ...Order
    }
  }
}
    ${InventoryFragmentDoc}
${OrderFragmentDoc}`;

export function useInventoryDetailPageQuery(options?: Omit<Urql.UseQueryArgs<InventoryDetailPageQueryVariables>, 'query'>) {
  return Urql.useQuery<InventoryDetailPageQuery>({ query: InventoryDetailPageDocument, ...options });
};
export const CreateInventoryDocument = gql`
    mutation CreateInventory($input: InventoryCreateInput!) {
  createInventory(input: $input) {
    name
  }
}
    `;

export function useCreateInventoryMutation() {
  return Urql.useMutation<CreateInventoryMutation, CreateInventoryMutationVariables>(CreateInventoryDocument);
};
export const UpdateInventoryDocument = gql`
    mutation UpdateInventory($where: InventoryWhereInput!, $data: InventoryUpdateInput!) {
  updateInventory(where: $where, data: $data) {
    id
    name
    inventoryItems
    requiredItems
    updatedAt
  }
}
    `;

export function useUpdateInventoryMutation() {
  return Urql.useMutation<UpdateInventoryMutation, UpdateInventoryMutationVariables>(UpdateInventoryDocument);
};
export const UpdateItemsInventoryDocument = gql`
    mutation UpdateItemsInventory($where: InventoryWhereInput!, $data: InventoryUpdateInput!) {
  updateInventory(where: $where, data: $data) {
    inventoryItems
    requiredItems
  }
}
    `;

export function useUpdateItemsInventoryMutation() {
  return Urql.useMutation<UpdateItemsInventoryMutation, UpdateItemsInventoryMutationVariables>(UpdateItemsInventoryDocument);
};
export const UserPageDocument = gql`
    query UserPage {
  user {
    ...User
  }
}
    ${UserFragmentDoc}`;

export function useUserPageQuery(options?: Omit<Urql.UseQueryArgs<UserPageQueryVariables>, 'query'>) {
  return Urql.useQuery<UserPageQuery>({ query: UserPageDocument, ...options });
};
export const LoginUserDocument = gql`
    mutation LoginUser($email: String!, $password: String!) {
  login(loginUserInput: {email: $email, password: $password}) {
    access_token
    refresh_token
    user {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;

export function useLoginUserMutation() {
  return Urql.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument);
};
export const CreateUserDocument = gql`
    mutation CreateUser($name: String!, $email: String!, $password: String!) {
  createUser(input: {name: $name, email: $email, password: $password}) {
    ...User
  }
}
    ${UserFragmentDoc}`;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const RefreshTokenDocument = gql`
    mutation RefreshToken {
  refreshToken {
    user {
      ...User
    }
    access_token
    refresh_token
  }
}
    ${UserFragmentDoc}`;

export function useRefreshTokenMutation() {
  return Urql.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument);
};
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logout
}
    `;

export function useLogoutUserMutation() {
  return Urql.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument);
};