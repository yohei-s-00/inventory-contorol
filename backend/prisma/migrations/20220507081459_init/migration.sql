/*
  Warnings:

  - A unique constraint covering the columns `[inventoryId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Order_inventoryId_key" ON "Order"("inventoryId");
