import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: String,

    description: String,

    image: String,

    github: String,

    liveUrl: String,

    technologies: [String],
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
