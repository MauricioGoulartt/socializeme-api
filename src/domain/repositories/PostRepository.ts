import { Post } from '../entities/Post';

export interface PostRepository {
    save(post: Post): Promise<Post>;
    findById(id: string): Promise<Post | null>;
    findByUserId(userId: string): Promise<Post[]>;
    findAll(): Promise<Post[]>;
    // ...
}
