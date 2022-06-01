/*
  Warnings:

  - You are about to drop the column `orderCord` on the `Inventory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[orderCode]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `orderCode` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Inventory_orderCord_key";

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "orderCord",
ADD COLUMN     "orderCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_orderCode_key" ON "Inventory"("orderCode");
