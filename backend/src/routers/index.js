import express from "express";
import AnnotationController from "../controllers/AnnotationController.js";
const routes = express.Router();

routes.get("/annotations", AnnotationController.read);
routes.post("/annotations", AnnotationController.create);
routes.delete("/annotations/:id", AnnotationController.delete);

export default routes;
