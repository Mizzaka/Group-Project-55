import { academicsTypeRepository } from "../repositories/academicsTypeRepository.js";

const getAllAcademicTypes = async (req, res) => {
  try {
    const response = await academicsTypeRepository.getAllAcademicTypes();
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllAcademicTypes }
