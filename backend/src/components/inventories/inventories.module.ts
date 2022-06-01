import { OrderModule } from '@ic-components/orders/orders.module';
import { Module } from '@nestjs/common';
import { InventoryService } from './inventories.service';
import { InventoryResolver } from './inventory.resolvers';

@Module({
  imports: [OrderModule],
  providers: [InventoryResolver,InventoryService],
})
export class InventoriesModule {}
