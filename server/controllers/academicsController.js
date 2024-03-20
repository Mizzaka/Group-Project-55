import academicsRepository from "../repositories/academicsRepository.js";

const json = (param) => {
  return JSON.stringify(param, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
};
export default json;

const getAllAcademics = async (req, res) => {
  try {
    const response = await academicsRepository.getAllAcademics();
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server errors" });
  }
};

const createAcademics = async (req, res) => {
  const { title, duration, description, acaId, uniId, acaFId } = req.body;
  try {
    const response = await academicsRepository.createAcademics(
      title,
      duration,
      description,
      acaId,
      uniId,
      acaFId
    );
    res.status(201).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSpecificAcademics = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const response = await academicsRepository.getSpecificAcademics(id);
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

export { getAllAcademics, createAcademics, getSpecificAcademics };
