import express from 'express';
import { PostRepositoryImpl } from '../../infrastructure/db/mongoose/PostRepositoryImpl';
import * as postUseCases from '../../app/use_cases/postUseCases';

const router = express.Router();
const postRepository = new PostRepositoryImpl();

router.get('/posts/:id', async (req, res) => {
    try {
        const post = await postUseCases.getPostById(postRepository, req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).send('Post not found');
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An unexpected error occurred');
        }
    }
});


router.post('/', async (req, res) => {
    try {
        const post = await postUseCases.createPost(postRepository, req.body);
        res.status(201).json(post);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An unexpected error occurred');
        }
    }
});

// ...

export default router;
