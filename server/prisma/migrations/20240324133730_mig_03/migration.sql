-- CreateTable
CREATE TABLE "JobLevel" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL,

    CONSTRAINT "JobLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobType" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "JobType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "acaId" INTEGER NOT NULL,
    "acaFId" INTEGER NOT NULL,
    "jobLId" INTEGER NOT NULL,
    "jobTypeId" INTEGER NOT NULL,
    "jobLocation" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "companyLogo" TEXT NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_acaId_fkey" FOREIGN KEY ("acaId") REFERENCES "AcademicQualificationType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_acaFId_fkey" FOREIGN KEY ("acaFId") REFERENCES "AcedemicsField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jobLId_fkey" FOREIGN KEY ("jobLId") REFERENCES "JobLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jobTypeId_fkey" FOREIGN KEY ("jobTypeId") REFERENCES "JobType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
