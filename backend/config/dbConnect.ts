import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(process.env.DB_URL || "").then(() => {
    console.log("Connected");
  });
};

export default dbConnect;
