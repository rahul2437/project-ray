import User from "@/models/User";
import connectDB from "@/middleware/db";

import { NextApiRequest, NextApiResponse } from "next";

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const { id } = req.query;
    const user = await User.findOne({ _id: id }).select({
      hash_password: 0,
      phone: 0,
      updatedAt: 0,
      createdAt: 0,
    });
    if (user) {
      return res.send({ message: `User Found`, user });
    }
    return res.send({ message: `User Not Found` });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};
const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const { id } = req.query;
    const deleteUser = await User.findByIdAndDelete({ _id: id });
    if (deleteUser) {
      return res.send({ message: `User Deleted`, deleteUser });
    }
    return res.send({ message: `User Not Found` });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return getUser(req, res);
    case "DELETE":
      return deleteUser(req, res);
    default:
      return res.send({ message: "Invalid request" });
  }
};

export default handler;
