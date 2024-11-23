import express from "express";
import { addFeedback, fetchFeedback } from "../controllers/feedbackController.js";

const feedbackRouter = express.Router();

feedbackRouter.post('/addFeedback',addFeedback);
feedbackRouter.get('/fetchFeedback',fetchFeedback);

export default feedbackRouter;