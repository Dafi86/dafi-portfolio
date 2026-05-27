import mongoose, { Schema } from "mongoose";

const CertificateSchema = new Schema(
  {
    title: String,

    issuer: String,

    year: String,

    image: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Certificate ||
  mongoose.model("Certificate", CertificateSchema);
