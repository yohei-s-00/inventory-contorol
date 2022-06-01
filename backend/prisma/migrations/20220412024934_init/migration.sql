/*
  Warnings:

  - You are about to alter the column `sendAdress` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `type` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `title` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `mailContent` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.
  - You are about to alter the column `sendCc` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "sendAdress" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "type" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "title" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "mailContent" SET DATA TYPE VARCHAR(1000),
ALTER COLUMN "sendCc" SET DATA TYPE VARCHAR(100);
