/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `assignment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "assignment";

-- CreateTable
CREATE TABLE "Universities" (
    "id" SERIAL NOT NULL,
    "uniName" TEXT NOT NULL,
    "uniLocation" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "rankNum" INTEGER NOT NULL,

    CONSTRAINT "Universities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcedemicsField" (
    "id" SERIAL NOT NULL,
    "field" TEXT NOT NULL,

    CONSTRAINT "AcedemicsField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcademicQualificationType" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "AcademicQualificationType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Academics" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "acaId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "uniId" INTEGER NOT NULL,
    "acaFId" INTEGER NOT NULL,

    CONSTRAINT "Academics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isQuestion" BOOLEAN NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Universities_uniName_key" ON "Universities"("uniName");

-- CreateIndex
CREATE UNIQUE INDEX "Academics_title_key" ON "Academics"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_key" ON "Post"("title");

-- AddForeignKey
ALTER TABLE "Academics" ADD CONSTRAINT "Academics_acaId_fkey" FOREIGN KEY ("acaId") REFERENCES "AcademicQualificationType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Academics" ADD CONSTRAINT "Academics_uniId_fkey" FOREIGN KEY ("uniId") REFERENCES "Universities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Academics" ADD CONSTRAINT "Academics_acaFId_fkey" FOREIGN KEY ("acaFId") REFERENCES "AcedemicsField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
