import connectDB from "@/middleware/db";
import Video from "@/models/Videos";

import { NextApiRequest, NextApiResponse } from "next";

const getVideo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const { id } = req.query;
    const video = await Video.findOne({ _id: id });
    if (video) {
      return res.send({ message: `Video Found`, video });
    }
    return res.send({ message: `Video Not Found` });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};
const deleteVideo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const { id } = req.query;
    const video = await Video.findByIdAndDelete({ _id: id });
    if (video) {
      return res.send({ message: `Video Deleted`, video });
    }
    return res.send({ message: `Video Not Found` });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return getVideo(req, res);
    case "DELETE":
      return deleteVideo(req, res);
    default:
      return res.send({ message: "Invalid request" });
  }
};

export default handler;
