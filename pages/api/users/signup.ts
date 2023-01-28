import User from "@/models/User";
import connectDB from "@/middleware/db";

import { NextApiRequest, NextApiResponse } from "next";

const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    let { body } = req;
    let user = new User(body);
    await user.save();
    res.send({ message: `${body.role} User Created`, user });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "POST":
      return addUser(req, res);
    default:
      return res.send({ message: "Invalid request" });
  }
};

export default handler;
