/*
  Warnings:

  - You are about to alter the column `latitude` on the `apartment` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(9,6)`.
  - You are about to alter the column `longitude` on the `apartment` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(9,6)`.

*/
-- AlterTable
ALTER TABLE `apartment` MODIFY `latitude` DECIMAL(9, 6) NOT NULL,
    MODIFY `longitude` DECIMAL(9, 6) NOT NULL;
