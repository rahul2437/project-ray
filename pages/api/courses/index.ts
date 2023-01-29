import connectDB from "@/middleware/db";
import Course from "@/models/Courses";
import { NextApiRequest, NextApiResponse } from "next";

const addCourse = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    let { body } = req;
    let course = new Course(body);
    await course.save();
    res.send({ message: `Course Created`, course });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

const getAllCourses = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const courses = await Course.find({});
    if (courses) {
      return res.send({
        message: `Courses Found`,
        total: courses.length,
        courses,
      });
    }
    return res.send({ message: `Courses Not Found` });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return getAllCourses(req, res);
    case "POST":
      return addCourse(req, res);
    default:
      return res.send({ message: "Invalid request" });
  }
};

export default handler;
