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
  const { name, description, price } = req.body;
  const { id } = req.params;

  let product = await Product.findByIdAndUpdate({ id });
  console.log(id);
  console.log(product);

  if (!product) {
    return res.status(404).json({
      success: false,
      msg: "invalid  product",
    });
  }

  return res.status(201).json({
    success: true,
    id,
  });
};

export const productdelete = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne({ id });
  console.log(id);
  console.log(product);
  if (!product) {
    return res.status(500).json({
      success: false,
      msg: "Product Not Found",
    });
  }
  await product.deleteOne();
  return res.status(200).json({
    success: true,
    msg: "Product Deleted Successfully",
  });
};
