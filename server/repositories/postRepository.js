import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllPosts = async () => {
  return await prisma.post.findMany({ include: { relatedAcaField: true } });
};

const createPosts = async (
  title,
  description,
  tags,
  created_at,
  isQuestion,
  acaFId
) => {
  return await prisma.post.create({
    data: { title, description, tags, created_at, isQuestion, acaFId },
  });
};

const getSpecificPost = async (id) => {
  return await prisma.post.findUnique({ where: { id: id } });
};

const updateSpecificPost = async (
  id,
  title,
  description,
  tags,
  created_at,
  isQuestion,
  acaFId
) => {
  return await prisma.post.update({
    where: { id: id },
    data: { title, description, tags, created_at, isQuestion, acaFId },
  });
};

const deleteSpecificPost = async (id) => {
  return await prisma.post.delete({ where: { id: id } });
};

const postRepositoy = {
  getAllPosts,
  createPosts,
  getSpecificPost,
  updateSpecificPost,
  deleteSpecificPost,
};
export default postRepositoy;
