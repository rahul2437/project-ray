import User from "@/models/User";
import connectDB from "@/middleware/db";
const jwt = require("jsonwebtoken");
import { NextApiRequest, NextApiResponse } from "next";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      if (user.authenticate(password)) {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.secret
        );
        const { _id, name, email, role } = user;
        return res.status(200).send({
          token,
          user: { _id, name, email, role },
        });
      }
      return res.status(400).send({ message: "Wrong password" });
    }
    return res.status(400).send({ message: "User not registered" });
  } catch (err) {
    return res.status(400).send({ message: "Server error" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "POST":
      return login(req, res);
    default:
      return res.status(400).send({ message: "Invalid Request" });
  }
}
