import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';

const createUser = async (userRepository: UserRepository, user: User): Promise<User> => {
    // adicionar lógicas de negócio, validações, etc.
    return userRepository.save(user);
}

const getUserById = async (userRepository: UserRepository, userId: string): Promise<User | null | undefined> => {
    return userRepository.findById(userId);
}

// ... 

export {
    createUser,
    getUserById
    // ... 
};
