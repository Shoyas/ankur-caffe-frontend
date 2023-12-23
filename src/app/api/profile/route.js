import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "./../auth/[...nextauth]/route";
import { User } from "@/app/models/User";

export const PUT = async (req) => {
  mongoose.connect(process.env.MONGODB_URL);
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email = session.user.email;
  console.log("Session: ", session, data);

  if ("name" in data) {
    // const result = await User.updateOne({ email }, { name: data.name });
    const user = await User.findOne({ email });
    user.name = data.name;
    await user.save();
    console.log(user);
  }
  return Response.json(true);
};
