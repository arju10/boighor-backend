import { NextFunction, Request, Response } from "express";
import { log } from "../../utils/logger";
import { Book } from "./book.model";

// Get All Books => API : "/api/v1/books/allBooks"  => Method : [GET]
export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const book = await Book.find();
    log.info(book);
    if (!book) {
      return res.status(404).json({ message: "No books found" });
    } else {
      return res.status(200).json({
        message: "Success",
        data: book,
      });
    }
  } catch (error: any) {
    log.error(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get Single Book By ID => API : "/api/v1/books/singleBook/:id"  => Method : [GET]
export const getSingleBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: `No book with the id ${id}` });
    } else {
      return res.status(200).json({
        message: "Success",
        data: book,
      });
    }
  } catch (error: any) {
    log.error(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update Single Book By ID => API : "/api/v1/books/singleBook/:id"  => Method : [Patch]
export const updateSingleBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const book = await Book.findByIdAndUpdate(id, updatedData, { new: true });

    if (!book) {
      log.error(`No book with the id ${id}`);
      return res.status(404).json({ message: `No book with the id ${id}` });
    } else {
      return res.status(200).json({
        message: "Updated Successfully",
        data: book,
      });
    }
  } catch (error: any) {
    log.error(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Single Book By ID => API : "/api/v1/books/singleBook/:id"  => Method : [Delete]
export const deleteSingleBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      log.error(`No book with the id ${id}`);
      return res.status(404).json({ message: `No book with the id ${id}` });
    } else {
      return res.status(200).json({
        message: "Deleted Successfully",
        data: book,
      });
    }
  } catch (error: any) {
    log.error(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
