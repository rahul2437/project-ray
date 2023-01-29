import connectDB from "@/middleware/db";
import Course from "@/models/Courses";

import { NextApiRequest, NextApiResponse } from "next";

const getCourse = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const { id } = req.query;
    const course = await Course.findOne({ _id: id });
    if (course) {
      return res.send({ message: `Course Found`, course });
    }
    return res.send({ message: `Course Not Found` });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};
const deleteCourse = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const { id } = req.query;
    const course = await Course.findByIdAndDelete({ _id: id });
    if (course) {
      return res.send({ message: `Course Deleted`, course });
    }
    return res.send({ message: `Course Not Found` });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return getCourse(req, res);
    case "DELETE":
      return deleteCourse(req, res);
    default:
      return res.send({ message: "Invalid request" });
  }
};

export default handler;
