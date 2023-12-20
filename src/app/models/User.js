import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (e) => {
        if (!e?.length || e.length < 5) {
          new Error("Password must be at least 5 characters");
        }
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", (user) => {
  const notHashedPassword = user.password;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(notHashedPassword, salt);

  user.password = hashedPassword;
});

export const User = models?.User || model("User", UserSchema);
