// Em postRepositoryImpl.ts na camada de infraestrutura

import { Post } from '../../../../domain/entities/Post';
import { PostRepository } from '../../../../domain/repositories/PostRepository';
import PostModel from '../models/Post'; 

const save: PostRepository['save'] = async (post: Post) => {
    const newPost = new PostModel(post);
    const savedPost = await newPost.save();
    return savedPost.toObject();
}

const findById: PostRepository['findById'] = async (id: string) => {
    const post = await PostModel.findById(id);
    return post ? post.toObject() : null;
}

const findByUserId: PostRepository['findByUserId'] = async (userId: string) => {
    const posts = await PostModel.find({ usuarioID: userId });
    return posts.map(post => post.toObject());
}

const findAll: PostRepository['findAll'] = async () => {
    const posts = await PostModel.find({});
    return posts.map(post => post.toObject());
}

// ... implemente outras funções conforme necessário

export const postRepositoryImpl: PostRepository = {
    save,
    findById,
    findByUserId,
    findAll,
    // ... outras funções conforme necessário
}
