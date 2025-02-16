import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const registerUser = async (name, email, password) => {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("Usuário já cadastrado.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ name, email, password: hashedPassword });

  const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return {
    token,
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
  };
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Credenciais inválidas.");
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return {
    token,
    user: { id: user.id, name: user.name, email: user.email },
  };
};
