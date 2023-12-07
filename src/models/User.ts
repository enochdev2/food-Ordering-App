import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
       type: String, 
       required: true, 
       unique: true 
      },
    password: { type: String },
    image: { type: String },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    phone: { type: String },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);
