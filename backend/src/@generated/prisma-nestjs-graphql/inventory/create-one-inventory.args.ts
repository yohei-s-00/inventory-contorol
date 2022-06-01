import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryCreateInput } from './inventory-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneInventoryArgs {

    @Field(() => InventoryCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => InventoryCreateInput)
    data!: InventoryCreateInput;
}
