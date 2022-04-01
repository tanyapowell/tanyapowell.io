import mongoose from "mongoose";

const GuestbookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Guestbook ||
  mongoose.model("Guestbook", GuestbookSchema);
