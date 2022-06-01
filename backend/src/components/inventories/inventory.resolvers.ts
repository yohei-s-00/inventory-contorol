import { PrismaService } from "./../prisma/prisma.service";
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { InventoryModel } from "./interfaces/inventory.model";
import { FindInventoryArgs } from "./interfaces/find-inventory-args";
import { argsToArgsConfig } from "graphql/type/definition";
import { OrderModel } from "@ic-components/orders/interfaces/orders.model";
import { OrderService } from "@ic-components/orders/orders.service";
import { InventoryService } from "./inventories.service";
import { InventoryCreateInput } from "./interfaces/inventory-create.input";
import { UsePipes, ValidationPipe } from "@nestjs/common";
import { InventoryUpdateInput } from "./interfaces/inventory-update.input";
import { UpdateOneUserArgs } from "./interfaces/inventory-update-one-required-without-order.input";

@Resolver((of) => InventoryModel)
export class InventoryResolver {
  constructor(
    private readonly prisma: PrismaService,
    private orderService: OrderService,
    private readonly inventoryService: InventoryService
  ) {}

  @Query(() => [InventoryModel], { name: "inventories", nullable: true })
  async getInventoryByPrisma() {
    return this.prisma.inventory.findMany();
  }

  @Query(() => [InventoryModel], { name: "inventoryCards", nullable: true })
  async getInventoryCardByPrisma() {
    return this.prisma.inventory.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        inventoryItems: true,
        requiredItems: true,
        thumbNailUrl: true,
      },
    });
  }

  @Query(() => InventoryModel, { name: "findInventory", nullable: false })
  async findinventory(@Args() args: FindInventoryArgs) {
    return await this.prisma.inventory.findUnique({
      rejectOnNotFound: true,
      where: {
        id: args.id,
        name: args.name,
      },
    });
  }

  @ResolveField(() => [OrderModel], { name: "order", nullable: false })
  async orders(@Parent() inventory: InventoryModel) {
    const { id } = inventory;
    return this.orderService.search({ inventoryId: id });
  }

  @Mutation(() => InventoryModel)
  @UsePipes(new ValidationPipe({ transform: false }))
  async createInventory(@Args("input") input: InventoryCreateInput) {
    return this.inventoryService.createInventory(input);
  }

  @Mutation(() => InventoryModel)
  @UsePipes(new ValidationPipe({ transform: false }))
  async updateInventory(@Args() args: UpdateOneUserArgs) {
    return this.prisma.inventory.update(args);
  }

}
