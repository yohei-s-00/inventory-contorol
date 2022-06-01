import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as bcrypt from "bcrypt";
import { UserModel } from "./interfaces/user.model";
import { FindFirstUserArgs } from "./interfaces/find-first-user.args";
import { UsersService } from "./users.service";
import { UserCreateInput } from './interfaces/user-create.input';
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "@ic-components/auth/guards/jwt-auth.guard";

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => UserModel)
  @UseGuards(JwtAuthGuard)
  user(@Args() args: FindFirstUserArgs) {
    return this.userService.findFirst(args);
  }

  @Mutation(() => UserModel)
  async createUser(@Args("input") input: UserCreateInput) {
    input.password = await bcrypt.hash(input.password, 10);
    return this.userService.createUser(input);
  }
}
