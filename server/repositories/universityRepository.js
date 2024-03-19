import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const getAllUnivesities = async () => {
    return await prisma.universities.findMany();
}

const universityRepository = { getAllUnivesities }
export default universityRepository