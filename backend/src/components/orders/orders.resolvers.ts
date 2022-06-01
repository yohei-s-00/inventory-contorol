import { UsePipes, ValidationPipe } from "@nestjs/common";
import { Args, Query, Resolver, Mutation } from "@nestjs/graphql";
import { OrderModel } from "./interfaces/orders.model";
import { GetOrderArgs } from "./interfaces/get-orders.args";
import { OrderService } from "./orders.service";
import { CreateOrderInput } from "./interfaces/create-orders.input";

@Resolver((of) => OrderModel)
export class OrdersResolver {
  constructor(private service: OrderService) {}

  @Query(() => [OrderModel], { name: "orders", nullable: true })
  async getOrders(@Args() args: GetOrderArgs) {
    return this.service.search(args);
  }
  @Mutation((returns) => OrderModel)
  
  @UsePipes(new ValidationPipe({ transform: false }))
  async addOrder(@Args('input') input: CreateOrderInput) {
    return this.service.add(input);
  }
}
