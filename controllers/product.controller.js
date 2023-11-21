import { Product } from "../models/product.model.js";

export const producthome = (req, res) => {
  res.send("Product Home Page");
};

export const productcreate = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    success: true,
    product,
  });
};

export const productread = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
};

export const productupdate = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      msg: "Product Not Found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    UseFindAndModify: false,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

export const productdelete = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      msg: "Product Not Found",
    });
  }
  await product.deleteOne();
  res.status(200).json({
    success: true,
    msg: "Product Deleted Successfully",
  });
};
