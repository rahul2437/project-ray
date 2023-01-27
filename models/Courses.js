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
    },
    type: {
      type: String,
      isFree: Boolean,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    videos: [
      {
        videoID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Video",
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
