/*
  Warnings:

  - You are about to drop the column `confirmedGuests` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `musicSuggestion` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `Guest` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Guest_token_key";

-- AlterTable
ALTER TABLE "Guest" DROP COLUMN "confirmedGuests",
DROP COLUMN "musicSuggestion",
DROP COLUMN "status",
DROP COLUMN "token",
ADD COLUMN     "attendChurch" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "attendParty" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "message" TEXT NOT NULL DEFAULT '';
