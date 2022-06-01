import { PrismaService } from "@ic-components/prisma/prisma.service"
import { Injectable } from "@nestjs/common"
import { Inventory } from "@prisma/client"
import { InventoryCreateInput } from "./interfaces/inventory-create.input"
import { InventoryModel } from "./interfaces/inventory.model"

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService,){}

  async createInventory(input: InventoryCreateInput): Promise<InventoryModel> {
    return await this.prisma.inventory.create({
      data: input,
    })
  }
}