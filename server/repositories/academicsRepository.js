import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllAcademics = async () => {
  return await prisma.academics.findMany({
    include: {
      university: true,
      academicField: true,
      academicQualificationType: true,
    },
  });
};

const createAcademics = async (
  title,
  duration,
  description,
  acaId,
  uniId,
  acaFId
) => {
  return await prisma.academics.create({
    data: { title, duration, description, acaId, uniId, acaFId },
  });
};

const getSpecificAcademics = async (id) => {
  return await prisma.academics.findUnique({ where: { id: id } });
};

const academicsRepository = {
  getAllAcademics,
  createAcademics,
  getSpecificAcademics,
};
export default academicsRepository;
