import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nome: String,
    username: String,
    senha: String,
    email: String,
    dataDeCriação: Date,
    dataDeNascimento: Date,
    interessesEValores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'InterestValue' }],
    configuraçõesDePrivacidade: {
        visualizarPerfil: String,
        visualizarPosts: String
    }
});

export default mongoose.model('User', userSchema);
