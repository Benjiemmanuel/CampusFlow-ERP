import { Router } from "express";
import universityController from "./university.controller";

const router = Router();

router.post("/", universityController.create);

router.get("/", universityController.getAll);

router.get("/:id", universityController.getById);

export default router;