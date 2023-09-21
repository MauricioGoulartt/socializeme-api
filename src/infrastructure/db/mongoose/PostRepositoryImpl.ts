import { Post } from '../../../domain/entities/Post';
import { PostRepository } from '../../../domain/repositories/PostRepository';
import PostModel from './models/Post'; // Supondo que você tenha definido o modelo Mongoose para Post

export class PostRepositoryImpl implements PostRepository {
    async save(post: Post): Promise<Post> {
        const newPost = new PostModel(post);
        const savedPost = await newPost.save();
        return savedPost.toObject();
    }

    async findById(id: string): Promise<Post | null> {
        const post = await PostModel.findById(id);
        return post ? post.toObject() : null;
    }

    async findByUserId(userId: string): Promise<Post[]> {
        const posts = await PostModel.find({ usuarioID: userId });
        return posts.map(post => post.toObject());
    }

    async findAll(): Promise<Post[]> {
        const posts = await PostModel.find({});
        return posts.map(post => post.toObject());
    }

    // ... implemente outros métodos conforme necessário
}
