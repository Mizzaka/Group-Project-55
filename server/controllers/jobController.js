import { jobRepository } from "../repositories/jobRepository.js";

const json = (param) => {
  return JSON.stringify(param, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
};
export default json;

const getAllJobs = async (req, res) => {
  try {
    const response = await jobRepository.getAllJobs();
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createJob = async (req, res) => {
  const {
    jobTitle,
    acaId,
    acaFId,
    jobLId,
    jobTypeId,
    jobLocation,
    jobDescription,
    companyLogo,
  } = req.body;
  try {
    const response = await jobRepository.createJobs(
      jobTitle,
      acaId,
      acaFId,
      jobLId,
      jobTypeId,
      jobLocation,
      jobDescription,
      companyLogo,
    );
    res.status(201).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSpecificJob = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const response = await jobRepository.createJobs(id);
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllJobs, createJob, getSpecificJob };
