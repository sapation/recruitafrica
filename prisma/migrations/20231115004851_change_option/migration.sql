/*
  Warnings:

  - Made the column `userId` on table `Education` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Referee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Work` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_userId_fkey";

-- DropForeignKey
ALTER TABLE "Referee" DROP CONSTRAINT "Referee_userId_fkey";

-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_userId_fkey";

-- AlterTable
ALTER TABLE "Education" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Referee" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Work" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referee" ADD CONSTRAINT "Referee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
