import { Injectable } from "@nestjs/common";
import { PrismaService } from "@ic-components/prisma/prisma.service";
import { UserModel } from "./interfaces/user.model";
import { FindFirstUserArgs } from "./interfaces/find-first-user.args";
import { FindUniqueUserArgs } from "./interfaces/find-unique-user.args";
import { UserCreateInput } from "./interfaces/user-create.input";
import { UpdateOneUserArgs } from "@ic-@generated/prisma-nestjs-graphql/user/update-one-user.args";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findFirst(args: FindFirstUserArgs): Promise<UserModel | null> {
    return this.prisma.user.findFirst({
      where: args.where,
    });
  }

  async findUnique(args: FindUniqueUserArgs): Promise<UserModel | null> {
    return this.prisma.user.findUnique({
      where: args.where,
    });
  }

  async createUser(input: UserCreateInput): Promise<UserModel> {
    return this.prisma.user.create({
      data: input,
    });
  }

  async update(args: UpdateOneUserArgs): Promise<UserModel> {
    return this.prisma.user.update(args);
  }
}
