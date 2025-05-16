/*
  Warnings:

  - You are about to drop the column `companion` on the `Guest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Guest" DROP COLUMN "companion",
ADD COLUMN     "confirmedGuests" JSONB;
