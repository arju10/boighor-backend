import { Router } from "express";
import {
  getAllBooks,
  getSingleBook,
  updateSingleBookById,
} from "./book.controller";

const router: Router = Router();

router.get("/allBooks", getAllBooks);
router.get("/singleBook/:id", getSingleBook);
router.patch("/singleBook/:id", updateSingleBookById);
export default router;
