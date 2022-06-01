import { Module } from '@nestjs/common';
import { OrdersResolver } from './orders.resolvers';
import { OrderService } from './orders.service';


@Module({
  imports: [],
  providers: [OrdersResolver, OrderService],
  exports: [OrderService],
})
export class OrderModule {}
