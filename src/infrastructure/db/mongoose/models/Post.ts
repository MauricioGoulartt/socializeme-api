import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    usuarioID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    conteúdo: String,
    dataDePublicação: Date,
    comentários: [{
        comentarioID: mongoose.Schema.Types.ObjectId,
        conteúdo: String,
        usuarioID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        dataDoComentário: Date
    }],
    interações: [{
        tipo: String,
        usuarioID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }]
});

export default mongoose.model('Post', postSchema);
