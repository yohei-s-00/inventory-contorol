import { IntFieldUpdateOperationsInput } from "@ic-@generated/prisma-nestjs-graphql/prisma/int-field-update-operations.input";
import { StringFieldUpdateOperationsInput } from "@ic-@generated/prisma-nestjs-graphql/prisma/string-field-update-operations.input";
import { Field, InputType, Int, ID } from "@nestjs/graphql";

@InputType()
  export class InventoryUpdateInput {
    
    @Field((type) => String, {nullable: true})
    name?: string;

    @Field((type) => String, {nullable: true})
    type?: StringFieldUpdateOperationsInput;

    @Field((type) => Int, {nullable: true})
    inventoryItems?: number;

    @Field((type) => Int, {nullable: true})
    requiredItems?: number;

    @Field((type) => Int, {nullable: true})
    price?: number;

    @Field((type) => String, {nullable: true})
    orderCode?: string;

    @Field((type) => String, {nullable: true})
    status?: string;

    @Field((type) => Date, {nullable: true})
    createdAt!: Date;

    @Field((type) => Date, {nullable:true})
    updatedAt?: Date | string;
  }