import { registerEnumType } from '@nestjs/graphql';

export enum InventoryScalarFieldEnum {
    id = "id",
    name = "name",
    type = "type",
    inventoryItems = "inventoryItems",
    requiredItems = "requiredItems",
    price = "price",
    status = "status",
    orderCode = "orderCode",
    orderDates = "orderDates",
    thumbNailUrl = "thumbNailUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(InventoryScalarFieldEnum, { name: 'InventoryScalarFieldEnum', description: undefined })
