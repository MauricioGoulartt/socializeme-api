import express from 'express';
import userRouter from './routes/userRoutes';
import postRouter from './routes/postRoutes';

const router = express.Router();

// Rotas de usuários
router.use('/users', userRouter);

// Rotas de posts
router.use('/posts', postRouter);


export default router;
