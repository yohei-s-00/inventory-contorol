import { registerEnumType } from '@nestjs/graphql';

export enum OrderScalarFieldEnum {
    id = "id",
    inventoryId = "inventoryId",
    sendAdress = "sendAdress",
    type = "type",
    title = "title",
    mailContent = "mailContent",
    sendCc = "sendCc",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
