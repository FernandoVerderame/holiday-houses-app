/*
  Warnings:

  - You are about to drop the `_categorytophoto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `photo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_categorytophoto` DROP FOREIGN KEY `_CategoryToPhoto_A_fkey`;

-- DropForeignKey
ALTER TABLE `_categorytophoto` DROP FOREIGN KEY `_CategoryToPhoto_B_fkey`;

-- DropForeignKey
ALTER TABLE `photo` DROP FOREIGN KEY `Photo_userId_fkey`;

-- DropTable
DROP TABLE `_categorytophoto`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `photo`;

-- CreateTable
CREATE TABLE `Apartment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `cover` VARCHAR(191) NULL,
    `description` VARCHAR(1000) NOT NULL,
    `visible` BOOLEAN NOT NULL,
    `rooms` INTEGER NOT NULL,
    `beds` INTEGER NOT NULL,
    `bathrooms` INTEGER NOT NULL,
    `sqm` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `longitude` DECIMAL(65, 30) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NULL,

    UNIQUE INDEX `Apartment_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ApartmentToService` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ApartmentToService_AB_unique`(`A`, `B`),
    INDEX `_ApartmentToService_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Apartment` ADD CONSTRAINT `Apartment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ApartmentToService` ADD CONSTRAINT `_ApartmentToService_A_fkey` FOREIGN KEY (`A`) REFERENCES `Apartment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ApartmentToService` ADD CONSTRAINT `_ApartmentToService_B_fkey` FOREIGN KEY (`B`) REFERENCES `Service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
