import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllJobs = () => {
  return prisma.job.findMany();
};

const createJobs = async (
  jobTitle,
  acaId,
  acaFId,
  jobLId,
  jobTypeId,
  jobLocation,
  jobDescription,
  companyLogo
) => {
  return await prisma.job.create({
    data: {
      jobTitle,
      acaId,
      acaFId,
      jobLId,
      jobTypeId,
      jobLocation,
      jobDescription,
      companyLogo,
    },
  });
};

const getSpecificJob = async (id) => {
  return await prisma.job.findUnique({ where: { id: id } });
};

const jobRepository = { getAllJobs, createJobs, getSpecificJob };
export { jobRepository };
