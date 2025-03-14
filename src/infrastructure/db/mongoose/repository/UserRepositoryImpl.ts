import { User } from '../../../../domain/entities/User';
import { UserRepository } from '../../../../domain/repositories/UserRepository';
import UserModel from '../models/User'; 

export const save: UserRepository['save'] = async (user: User) => {
    const newUser = new UserModel(user);
    const savedUser = await newUser.save();
    return savedUser.toObject();
}

export const findById: UserRepository['findById'] = async (id: string) => {
    const user = await UserModel.findById(id);
    return user ? user.toObject() : null;
}

export const findByUsername: UserRepository['findByUsername'] = async (username: string) => {
    const user = await UserModel.findOne({ username });
    return user ? user.toObject() : null;
}

export const userRepositoryImpl: UserRepository = {
    save,
    findById,
    findByUsername,
}
