import { Router } from "express";
import { getAllBooks, getSingleBook } from './book.controller';

const router:Router = Router();

router.get("/allBooks",getAllBooks);
router.get("/singleBook/:id",getSingleBook);
export default router;