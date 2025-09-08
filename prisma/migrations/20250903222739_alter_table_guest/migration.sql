/*
  Warnings:

  - You are about to drop the column `email` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Guest` table. All the data in the column will be lost.
  - Made the column `confirmedGuests` on table `Guest` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Guest" DROP COLUMN "email",
DROP COLUMN "image",
DROP COLUMN "phone",
ALTER COLUMN "musicSuggestion" SET NOT NULL,
ALTER COLUMN "musicSuggestion" SET DATA TYPE TEXT,
ALTER COLUMN "confirmedGuests" SET NOT NULL,
ALTER COLUMN "confirmedGuests" SET DATA TYPE TEXT;
