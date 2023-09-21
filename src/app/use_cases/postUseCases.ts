import { Post } from '../../domain/entities/Post';
import { PostRepository } from '../../domain/repositories/PostRepository';

const createPost = async (postRepository: PostRepository, post: Post): Promise<Post> => {
    if (!post.conteúdo || post.conteúdo.trim() === '') {
        throw new Error('Post content is required');
    }

    // ... outras validações ou lógicas de negócio

    return postRepository.save(post);
}

const getPosts = async (postRepository: PostRepository, someParameter: string): Promise<Post[]> => {
    if (!someParameter) {
        throw new Error('someParameter is required');
    }

    // lógicas de negócio, como filtrar posts baseado em someParameter

    return postRepository.findAll();
}

const getPostById = async (postRepository: PostRepository, postId: string): Promise<Post | null> => {
    if (!postId) {
        throw new Error('Post ID is required');
    }

    return postRepository.findById(postId);
}

// ... 

export {
    createPost,
    getPosts,
    getPostById
    // ...
};
