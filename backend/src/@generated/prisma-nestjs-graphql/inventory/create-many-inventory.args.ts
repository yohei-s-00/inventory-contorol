import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryCreateManyInput } from './inventory-create-many.input';

@ArgsType()
export class CreateManyInventoryArgs {

    @Field(() => [InventoryCreateManyInput], {nullable:false})
    data!: Array<InventoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
