/*
  Warnings:

  - You are about to drop the column `authorId` on the `Idea` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Idea` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Idea" DROP CONSTRAINT "Idea_authorId_fkey";

-- AlterTable
ALTER TABLE "Idea" DROP COLUMN "authorId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Idea" ADD CONSTRAINT "Idea_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
