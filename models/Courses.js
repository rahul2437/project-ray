import mongoose from "mongoose";
const CourseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    isFree: {
      type: Boolean,
      required: true,
      default: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    videos: [
      {
        videoID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "video",
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.course || mongoose.model("course", CourseSchema);
