import mongoose from "mongoose";

const heroSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    buttonText: { type: String, required: true },
    image: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    order: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const heroModel = mongoose.models.hero || mongoose.model("hero", heroSchema);

export default heroModel;
