import express, { Application } from "express";
const app: Application = express();
import cors from "cors";

// Application routes
import userRoute from "./app/modules/user/user.route";

app.use(cors());

//parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);

export default app;
