import express from "express";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";
import {
  addHero,
  getHero,
  deleteHero,
  updateHeroOrder,
} from "../controllers/heroController.js";

const heroRouter = express.Router();

// admin
heroRouter.post("/add", adminAuth, upload.single("image"), addHero);
heroRouter.post("/delete", adminAuth, deleteHero);
heroRouter.post("/update-order", adminAuth, updateHeroOrder);

// public
heroRouter.get("/list", getHero);

export default heroRouter;
