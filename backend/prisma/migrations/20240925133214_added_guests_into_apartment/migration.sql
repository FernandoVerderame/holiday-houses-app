/*
  Warnings:

  - Added the required column `guest` to the `Apartment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `apartment` ADD COLUMN `guest` INTEGER NOT NULL;
