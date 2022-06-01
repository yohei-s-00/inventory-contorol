import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InventoryCountAggregate } from './inventory-count-aggregate.output';
import { InventoryAvgAggregate } from './inventory-avg-aggregate.output';
import { InventorySumAggregate } from './inventory-sum-aggregate.output';
import { InventoryMinAggregate } from './inventory-min-aggregate.output';
import { InventoryMaxAggregate } from './inventory-max-aggregate.output';

@ObjectType()
export class AggregateInventory {

    @Field(() => InventoryCountAggregate, {nullable:true})
    _count?: InventoryCountAggregate;

    @Field(() => InventoryAvgAggregate, {nullable:true})
    _avg?: InventoryAvgAggregate;

    @Field(() => InventorySumAggregate, {nullable:true})
    _sum?: InventorySumAggregate;

    @Field(() => InventoryMinAggregate, {nullable:true})
    _min?: InventoryMinAggregate;

    @Field(() => InventoryMaxAggregate, {nullable:true})
    _max?: InventoryMaxAggregate;
}
