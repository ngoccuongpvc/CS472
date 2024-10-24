import express from "express";
import dictionaryController from "../controllers/dictionary.js";

const dictionaryRouter = express.Router();

dictionaryRouter.get('/words/:word', dictionaryController.trackWord, dictionaryController.lookupWord);

dictionaryRouter.get('/leaderboard', dictionaryController.getFrequentWords);

export default dictionaryRouter;