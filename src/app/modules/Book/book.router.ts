import { Router } from "express";
import {
  deleteSingleBookById,
  getAllBooks,
  getSingleBook,
  updateSingleBookById,
} from "./book.controller";

const router: Router = Router();

router.get("/allBooks", getAllBooks);
router.get("/singleBook/:id", getSingleBook);
router.patch("/singleBook/:id", updateSingleBookById);
router.delete("/singleBook/:id", deleteSingleBookById);
export default router;
