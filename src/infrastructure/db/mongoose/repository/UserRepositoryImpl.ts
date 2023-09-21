import { User } from '../../../../domain/entities/User';

import UserModel from '../models/User'; // Supondo que você tenha definido o modelo Mongoose para User


export const save = async (user: User): Promise<User> => {
    const newUser = new UserModel(user);
    const savedUser = await newUser.save();
    return savedUser.toObject();
}

export const findById = async (id: string): Promise<User | null> => {
    const user = await UserModel.findById(id);
    return user ? user.toObject() : null;
}

export const findByUsername = async (username: string): Promise<User | null> => {
    const user = await UserModel.findOne({ username });
    return user ? user.toObject() : null;
}

// ... implemente outros métodos conforme necessário

