import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyInventoryInput } from './order-create-many-inventory.input';

@InputType()
export class OrderCreateManyInventoryInputEnvelope {

    @Field(() => [OrderCreateManyInventoryInput], {nullable:false})
    data!: Array<OrderCreateManyInventoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
