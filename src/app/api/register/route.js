import { User } from "../../models/User";
import mongoose from "mongoose";

export const POST = async (req) => {
  const body = await req.json();
  mongoose.connect(process.env.MONGODB_URL);
  const createdUser = await User.create(body);

  return Response.json(createdUser);
};
