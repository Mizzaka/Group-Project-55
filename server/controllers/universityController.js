import universityRepository from "../repositories/universityRepository.js";

const getAllUnivesities = async (req, res) => {
  try {
    const response = await universityRepository.getAllUnivesities();
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.stautus(500).error("Server error")
  }
};

export { getAllUnivesities };
