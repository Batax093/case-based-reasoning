import { Router } from "express";

import { getData, simpleMatching, similaritas } from "../controllers/diabetes.controller.js";

const router = Router();

router.get("/", getData);
router.post("/", simpleMatching);
router.post("/similaritas", similaritas);


export default router