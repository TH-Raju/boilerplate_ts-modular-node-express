import mongoose from "mongoose";
import app from "./app";

const port = 3000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice");
    console.log("Database connection successful");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (er) {
    console.log("Failed to connect ", er);
  }
}

main();
