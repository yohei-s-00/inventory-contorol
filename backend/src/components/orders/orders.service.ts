import { Injectable } from "@nestjs/common";
import { PrismaService } from "@ic-components/prisma/prisma.service";
import { Order } from "@prisma/client";
import { CreateOrderInput } from "./interfaces/create-orders.input";
import { GetOrderArgs } from "./interfaces/get-orders.args";

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async add(input: CreateOrderInput): Promise<Order> {
    return await this.prisma.order.create({
      data: input,
    });
  }

  async search(args: GetOrderArgs): Promise<Order[]> {
    return await this.prisma.order.findMany({
      where: {
        inventoryId: args.inventoryId,
      },
      orderBy: {
        createdAt: args.sortAs,
      }
    })
  }
}