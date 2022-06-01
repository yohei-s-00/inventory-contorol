import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryWhereInput } from './inventory-where.input';
import { InventoryOrderByWithRelationInput } from './inventory-order-by-with-relation.input';
import { InventoryWhereUniqueInput } from './inventory-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InventoryCountAggregateInput } from './inventory-count-aggregate.input';
import { InventoryAvgAggregateInput } from './inventory-avg-aggregate.input';
import { InventorySumAggregateInput } from './inventory-sum-aggregate.input';
import { InventoryMinAggregateInput } from './inventory-min-aggregate.input';
import { InventoryMaxAggregateInput } from './inventory-max-aggregate.input';

@ArgsType()
export class InventoryAggregateArgs {

    @Field(() => InventoryWhereInput, {nullable:true})
    where?: InventoryWhereInput;

    @Field(() => [InventoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InventoryOrderByWithRelationInput>;

    @Field(() => InventoryWhereUniqueInput, {nullable:true})
    cursor?: InventoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InventoryCountAggregateInput, {nullable:true})
    _count?: InventoryCountAggregateInput;

    @Field(() => InventoryAvgAggregateInput, {nullable:true})
    _avg?: InventoryAvgAggregateInput;

    @Field(() => InventorySumAggregateInput, {nullable:true})
    _sum?: InventorySumAggregateInput;

    @Field(() => InventoryMinAggregateInput, {nullable:true})
    _min?: InventoryMinAggregateInput;

    @Field(() => InventoryMaxAggregateInput, {nullable:true})
    _max?: InventoryMaxAggregateInput;
}
