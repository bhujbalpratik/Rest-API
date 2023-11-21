import express from "express";
import {
  productcreate,
  productdelete,
  producthome,
  productread,
  productupdate,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", producthome);

router.post("/new", productcreate);

router.get("/allproducts", productread);

router.put("/update/:id", productupdate);

router.delete("/delete/:id", productdelete);

export default router;
