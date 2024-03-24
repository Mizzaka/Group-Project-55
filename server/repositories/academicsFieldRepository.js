import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllAcademicFields = async () => {
  return await prisma.acedemicsField.findMany();
};

const academicsFieldRepository = { getAllAcademicFields };
export { academicsFieldRepository };
