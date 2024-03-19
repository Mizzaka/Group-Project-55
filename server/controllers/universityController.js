import universityRepository from "../repositories/universityRepository.js";

const getAllUnivesities = async (req, res) => {
  try {
    const response = await universityRepository.getAllUnivesities();
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.stautus(500).json({error:"Internal server error"})
  }
};

const createUniversity = async (req, res) => {
  const {uniName, uniLocation, logo, rankNum } = req.body
  try {
    const response = await universityRepository.createUniversity(
      uniName, uniLocation, logo, rankNum
    )
    res.status(201).json({ response})
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Internal server error"})
  }
}

export { getAllUnivesities, createUniversity };
