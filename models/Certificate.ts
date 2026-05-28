import mongoose, { Schema, models, model } from "mongoose";

const CertificateSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    issuer: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const Certificate =
  models.Certificate || model("Certificate", CertificateSchema);

export default Certificate;
