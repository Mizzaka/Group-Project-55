/*
  Warnings:

  - Added the required column `acaFId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "acaFId" INTEGER NOT NULL,
ALTER COLUMN "isQuestion" DROP NOT NULL,
ALTER COLUMN "isQuestion" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_acaFId_fkey" FOREIGN KEY ("acaFId") REFERENCES "AcedemicsField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
