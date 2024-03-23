import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllAcademicTypes = async () => {
  return await prisma.academicQualificationType.findMany();
};

const academicsTypeRepository = { getAllAcademicTypes };
export { academicsTypeRepository };
