import express from "express";
import bodyParser from "body-parser";
import { homecontrol } from "./controllers/server.controller.js";
import { mongoConnection } from "./configs/mongoose.js";
import userRouter from "./routers/user.router.js";
import productRouter from "./routers/product.router.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/user", userRouter);
app.use("/product", productRouter);

app.get("/", homecontrol);

mongoConnection();

app.listen(3000, () => {
  console.log(`Server is Working on http://localhost:3000`);
});
