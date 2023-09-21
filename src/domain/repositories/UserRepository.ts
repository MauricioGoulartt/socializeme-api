import { User } from '../entities/User';

export interface UserRepository {
    save(user: User): Promise<User>;
    findById(id: string): Promise<User | null | undefined>;
    findByUsername(username: string): Promise<User | null>;
    // ... 
}
