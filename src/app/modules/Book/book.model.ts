import mongoose, { Schema } from "mongoose";
import { IBook } from "./book.interface";

const BookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: [String],
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationYear: {
      type: Number,
      required: true,
    },
    publisher: {
      type: {
        name: {
          type: String,
          required: true,
        },
        location: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 2000,
    },
    reviews: [
      {
        user: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
      default: "0",
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model<IBook>("Product", BookSchema);
