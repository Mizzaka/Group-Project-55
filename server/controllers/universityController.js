import universityRepository from "../repositories/universityRepository.js";

const json = (param) => {
  return JSON.stringify(param, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
};
export default json;

const getAllUnivesities = async (req, res) => {
  try {
    const response = await universityRepository.getAllUnivesities();
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.stautus(500).json({ error: "Internal server error" });
  }
};

const createUniversity = async (req, res) => {
  const { uniName, uniLocation, logo, rankNum } = req.body;
  try {
    const response = await universityRepository.createUniversity(
      uniName,
      uniLocation,
      logo,
      rankNum
    );
    res.status(201).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSpecificUniversity = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const response = await universityRepository.getSpecificUniversity(id);
    if (!response) {
      res.status(404).json({ Error: "Not found" });
    } else {
      res.status(200).type("json").send(json(response));
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal sever error" });
  }
};

export { getAllUnivesities, createUniversity, getSpecificUniversity };
