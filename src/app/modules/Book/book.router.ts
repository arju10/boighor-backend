import { Router } from "express";
import { getAllBooks } from './book.controller';

const router:Router = Router();

router.get("/allBooks",getAllBooks);

export default router;