import mongoose from 'mongoose';

const interestValueSchema = new mongoose.Schema({
    descrição: String
});

export default mongoose.model('InterestValue', interestValueSchema);
