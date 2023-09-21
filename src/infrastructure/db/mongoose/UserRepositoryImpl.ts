import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import UserModel from './models/User'; // Supondo que você tenha definido o modelo Mongoose para User

export class UserRepositoryImpl implements UserRepository {
    async save(user: User): Promise<User> {
        const newUser = new UserModel(user);
        const savedUser = await newUser.save();
        return savedUser.toObject();
    }

    async findById(id: string): Promise<User | null> {
        const user = await UserModel.findById(id);
        return user ? user.toObject() : null;
    }

    async findByUsername(username: string): Promise<User | null> {
        const user = await UserModel.findOne({ username });
        return user ? user.toObject() : null;
    }

    // ... implemente outros métodos conforme necessário
}
