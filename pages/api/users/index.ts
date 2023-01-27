import User from "@/models/User";
import connectDB from "@/middleware/db";

import { NextApiRequest, NextApiResponse } from "next";

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const users = await User.find({}).select({
      hash_password: 0,
      phone: 0,
      updatedAt: 0,
      createdAt: 0,
    });
    return res.status(200).send({ message: "Found users", users });
  } catch (err: any) {
    return res.status(400).send({ message: err.message });
  }
};
const addCourse = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    let { body } = req;

    res.send({ message: `${body.role} User Created` });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return getUsers(req, res);
    case "POST":
      return addUser(req, res);
    default:
      return res.send({ message: "Invalid request" });
  }
};

export default handler;
