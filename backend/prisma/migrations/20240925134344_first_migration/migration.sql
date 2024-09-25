/*
  Warnings:

  - You are about to drop the column `guest` on the `apartment` table. All the data in the column will be lost.
  - Added the required column `guests` to the `Apartment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `apartment` DROP COLUMN `guest`,
    ADD COLUMN `guests` INTEGER NOT NULL;
