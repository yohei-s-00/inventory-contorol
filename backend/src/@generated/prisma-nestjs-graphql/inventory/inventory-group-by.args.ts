import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryWhereInput } from './inventory-where.input';
import { InventoryOrderByWithAggregationInput } from './inventory-order-by-with-aggregation.input';
import { InventoryScalarFieldEnum } from './inventory-scalar-field.enum';
import { InventoryScalarWhereWithAggregatesInput } from './inventory-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InventoryCountAggregateInput } from './inventory-count-aggregate.input';
import { InventoryAvgAggregateInput } from './inventory-avg-aggregate.input';
import { InventorySumAggregateInput } from './inventory-sum-aggregate.input';
import { InventoryMinAggregateInput } from './inventory-min-aggregate.input';
import { InventoryMaxAggregateInput } from './inventory-max-aggregate.input';

@ArgsType()
export class InventoryGroupByArgs {

    @Field(() => InventoryWhereInput, {nullable:true})
    where?: InventoryWhereInput;

    @Field(() => [InventoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InventoryOrderByWithAggregationInput>;

    @Field(() => [InventoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof InventoryScalarFieldEnum>;

    @Field(() => InventoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InventoryScalarWhereWithAggregatesInput;

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
