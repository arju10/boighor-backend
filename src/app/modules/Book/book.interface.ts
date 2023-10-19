import { Document } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: {
    name: string;
    location: string;
  };
  description: string;
  reviews?: {
    user: string;
    comment: string;
  }[];
  rating: number;
  price: string;
}
