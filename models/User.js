const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 50,
    },
    hash_password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["superadmin", "admin", "teacher", "student", "organization"],
      default: "student",
    },
    enrolledCourses: {
      type: [
        {
          courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "course",
          },
        },
      ],
    },
    listedCourses: {
      type: [
        {
          courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "course",
          },
        },
      ],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync(password, 10);
});

UserSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  },
};

export default mongoose.models.user || mongoose.model("user", UserSchema);
