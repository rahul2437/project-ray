import connectDB from "@/middleware/db";
import Course from "@/models/Courses";
import Video from "@/models/Videos";
import { NextApiRequest, NextApiResponse } from "next";

const addVideo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    let { body } = req;
    let video = new Video(body);
    await video.save();
    await Course.findByIdAndUpdate(
      { _id: body.course },
      { $push: { videos: { videoID: video._id } } }
    );
    res.send({ message: `Video created`, video });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

const getAllVideos = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const videos = await Course.find({});
    if (videos) {
      return res.send({
        message: `Videos Found`,
        total: videos.length,
        videos,
      });
    }
    return res.send({ message: `Videos Not Found` });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return getAllVideos(req, res);
    case "POST":
      return addVideo(req, res);
    default:
      return res.send({ message: "Invalid request" });
  }
};

export default handler;
