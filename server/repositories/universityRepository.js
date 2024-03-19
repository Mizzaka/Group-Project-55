import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllUnivesities = async () => {
  return await prisma.universities.findMany();
};

const createUniversity = async (uniName, uniLocation, logo, rankNum) => {
  return await prisma.universities.create({
    data: { uniName, uniLocation, logo, rankNum },
  });
};

const getSpecificUniversity = async (id) => {
  return await prisma.universities.findUnique({ where: { id: id } });
};

const universityRepository = {
  getAllUnivesities,
  createUniversity,
  getSpecificUniversity,
};
export default universityRepository;
