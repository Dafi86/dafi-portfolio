import mongoose, { Schema, models, model } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    github: {
      type: String,
      default: "",
    },

    liveUrl: {
      type: String,
      default: "",
    },

    technologies: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
