

import { Router } from "express";
import { student, author } from "../databases/studentArray.js";

const router = Router();
router.get("/", (req, res) => {
    res.render("student", { student: student, author: author });
});
//
export default router;