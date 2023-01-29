import User from "@/models/User";
import connectDB from "@/middleware/db";

import { NextApiRequest, NextApiResponse } from "next";

const getAllUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const users = await User.find({}).select({
      hash_password: 0,
      createdAt: 0,
      updatedAt: 0,
      listedCourses: 0,
      enrolledCourses: 0,
    });
    if (users) {
      return res.send({
        message: `Users Found`,
        total: users.length,
        users,
      });
    }
    return res.send({ message: `Users Not Found` });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};
const addCourse = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    let { body } = req;
    res.send({ message: `Course added` });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return getAllUsers(req, res);
    case "POST":
      return addCourse(req, res);
    default:
      return res.send({ message: "Invalid request" });
  }
};
export default handler;
