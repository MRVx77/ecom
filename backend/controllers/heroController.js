import { v2 as cloudinary } from "cloudinary";
import heroModel from "../models/heroModel.js";

// ADD HERO SLIDE (ADMIN)
const addHero = async (req, res) => {
  try {
    const { title, subtitle, buttonText, order } = req.body;

    if (!req.file) {
      return res.json({ success: false, message: "Image required" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });

    const hero = new heroModel({
      title,
      subtitle,
      buttonText,
      image: result.secure_url,
      order: order ?? 0,
    });

    await hero.save();

    res.json({ success: true, message: "Hero slide added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// GET HERO SLIDES (PUBLIC)
const getHero = async (req, res) => {
  try {
    const heroes = await heroModel.find({ isActive: true }).sort({ order: 1 });

    res.json({ success: true, heroes });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// DELETE HERO (ADMIN)
const deleteHero = async (req, res) => {
  try {
    await heroModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Hero slide removed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//UPDATE ORDER

const updateHeroOrder = async (req, res) => {
  try {
    const { id, order } = req.body;

    await heroModel.findByIdAndUpdate(id, { order });

    res.json({ success: true, message: "Order updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addHero, getHero, deleteHero, updateHeroOrder };
