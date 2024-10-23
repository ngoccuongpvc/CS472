import mongoose from "mongoose";

const { Schema } = mongoose;

const counterSchema = new Schema({
    word: String,
    counter: Number,
}, {
    query: {
        getTopWords(n) {
            return this.sort({ counter: -1, word: 1 }).limit(n);
        }
    },
    statics: {
        incWord(word) {
            this.updateOne(
                { word: new RegExp('^' + word + '$', 'i') },
                {
                    $inc: { counter: 1 },
                    $setOnInsert: { word: word }
                },
                { upsert: true }
            ).exec();
        }
    }
});

const Counter = mongoose.model('Counter', counterSchema);

export default Counter;