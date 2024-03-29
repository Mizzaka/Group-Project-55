import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository.js";

const createToken = async (id) => {
  return jwt.sign({ id: id }, "thisismysecretpasswordnotsosecretnowisit", {
    expiresIn: "3d",
  });
};

const getAllUsers = async (req, res) => {
  try {
    const user = await userRepository.getAllUsers();
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const signUp = async (req, res) => {
  const {userName, password } = req.body;
  try {
    const user = await userRepository.signUp(userName, password);
    const token = await createToken(user.id);
    res.status(201).json({ userName, password, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await userRepository.logIn(userName, password);
    const token = await createToken(user.id);
    res.status(200).json({ userName, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await userRepository.deleteUser(id);
    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllUsers, deleteUser, signUp, login };
