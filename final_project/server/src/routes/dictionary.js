import express from "express";
import dictionaryController from "../controllers/dictionary.js";

const dictionaryRouter = express.Router();


/**
 * @swagger
 * /dictionary/words/{word}:
 *   get:
 *     summary: Lookup for definition of words
 *     parameters:
 *       - in: path
 *         name: word
 *         schema:
 *           type: string
 *         required: true
 *         description: word to look up
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           'application/json':
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    word:
 *                      type: string
 *                      description: word that match the input
 *                      example: Hello
 *                    wordtype:
 *                      type: string
 *                      description: type of word
 *                      example: interj. & n.
 *                    definition:
 *                      type: string
 *                      description: the definition of word
 *                      example: See Halloo.
 */
dictionaryRouter.get('/words/:word', dictionaryController.trackWord, dictionaryController.lookupWord);

/**
 * @swagger
 * /dictionary/leaderboard:
 *   get:
 *     summary: Get top 10 most popular words
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           'application/json':
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    word:
 *                      type: string
 *                      description: word that match the input
 *                      example: Hello
 *                    counter:
 *                      type: number
 *                      description: Number of searches
 *                      example: 110
 */
dictionaryRouter.get('/leaderboard', dictionaryController.getFrequentWords);

export default dictionaryRouter;