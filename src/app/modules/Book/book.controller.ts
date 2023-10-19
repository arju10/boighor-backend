import { NextFunction, Request, Response } from "express";
import { log } from "../../utils/logger";
import { Book } from './book.model';

// Get All Books => API : "/api/v1/books/allBooks"  => Method : [GET]
export const getAllBooks = async(req:Request, res: Response, next: NextFunction) => {
    try {
        const book = await Book.find();
        log.info(book);
        if(!book){
            return res.status(404).json({message:"No books found"});
        }
        else{
            return res.status(200).json({
                message:'Success',
                data:book
            })
        }
        
    } catch (error:any) {
        log.error(error.message);
    }
}

// Get Single Book By ID => API : "/api/v1/books/singleBook/:id"  => Method : [GET]
export const getSingleBook = async(req: Request, res: Response, next:NextFunction) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        if(!book){
            return res.status(404).json({message:`No book with the id ${id}`})
        }
        else{
            return res.status(200).json({
                message:'Success',
                data:book
            })
        }
    } catch (error:any) {
        log.error(error.message);
    }
}