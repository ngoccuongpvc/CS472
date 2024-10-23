import Counter from "../models/counter.js";
import Vocabulary from "../models/vocabulary.js";

export default {
    lookupWord: async (req, res, next) => {
        const word = req.params.word;
        if (!word) {
            res.status(400).json({error: "Please input word"});
        } else {
            const vocabularies = await Vocabulary.find().byWord(word).exec();
            res.status(200).json(vocabularies);
        }
    },
    trackWord: async (req, res, next) => {
        const word = req.params.word;
        if (word) {
            Counter.incWord(word);
        }
        next();
    },
    getFrequentWords: async (req, res, next) => {
        const words = await Counter.find().getTopWords(10).exec();
        console.log(words)
        res.status(200).json(words);
    }
}