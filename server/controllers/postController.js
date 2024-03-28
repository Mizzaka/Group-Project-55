import postRepository from "../repositories/postRepository.js";

const json = (param) => {
  return JSON.stringify(param, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
};
export default json;

const getAllPosts = async (req, res) => {
  try {
    const response = await postRepository.getAllPosts();
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server errors" });
  }
};

const createPosts = async (req, res) => {
  const { title, description, tags, created_at, isQuestion, acaFId } = req.body;
  try {
    const response = await postRepository.createPosts(
      title,
      description,
      tags,
      created_at,
      isQuestion,
      acaFId
    );
    res.status(201).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSpecificPosts = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const response = await postRepository.getSpecificPost(id);
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

const updateSpecificPost = async (req, res) => {
  const id = Number(req.params.id);
  const { title, description, tags, created_at, isQuestion, acaFId } = req.body;
  try {
    const response = await postRepository.updateSpecificPost(
      id,
      title,
      description,
      tags,
      created_at,
      isQuestion,
      acaFId
    );
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

const deleteSpecificPost = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const response = await postRepository.deleteSpecificPost(id);
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

export { getAllPosts, createPosts, getSpecificPosts, updateSpecificPost, deleteSpecificPost };
