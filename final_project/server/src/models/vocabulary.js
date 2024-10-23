import mongoose from 'mongoose';
const { Schema } = mongoose;

const vocabularySchema = new Schema({
    word: String,
    wordtype: String,
    definition: String
}, {
    query: {
        byWord(word) {
            return this.where({word: new RegExp('^' + word + '$', 'i')});
        }
    }
});

const Vocabulary = mongoose.model('Vocabulary', vocabularySchema);

export default Vocabulary;