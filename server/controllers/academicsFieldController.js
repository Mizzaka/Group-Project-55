import { academicsFieldRepository } from "../repositories/academicsFieldRepository.js";

const getAllAcademicFields = async (req, res) => {
  try {
    const response = await academicsFieldRepository.getAllAcademicFields();
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllAcademicFields };
