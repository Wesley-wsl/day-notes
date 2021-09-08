import express from "express";
import AnnotationController from "../controllers/AnnotationController.js";
import PriorityController from "../controllers/PriorityController.js";
import ContentController from "../controllers/ContentController.js";
const routes = express.Router();

routes.get("/annotations", AnnotationController.read);
routes.post("/annotations", AnnotationController.create);
routes.delete("/annotations/:id", AnnotationController.delete);

routes.get("/priorities", PriorityController.read);
routes.put("/priorities/:id", PriorityController.update);

routes.put("/contents/:id", ContentController.update);

export default routes;
