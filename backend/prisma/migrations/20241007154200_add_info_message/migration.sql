/*
  Warnings:

  - Added the required column `name` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `message` ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;
