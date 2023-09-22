import express from 'express'

import { userRepositoryImpl } from '../../infrastructure/db/mongoose/repository/UserRepositoryImpl'

import * as userUseCases from '../../app/use_cases/userUseCases'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const user = await userUseCases.getUserById(
      userRepositoryImpl,
      req.params.id
    )
    if (user) {
      res.json(user)
    } else {
      res.status(404).send('User not found')
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message)
    } else {
      res.status(400).send('An unexpected error occurred')
    }
  }
})

router.post('/', async (req, res) => {
  try {
    const user = await userUseCases.createUser(userRepositoryImpl, req.body)
    res.status(201).json(user)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message)
    } else {
      res.status(400).send('An unexpected error occurred')
    }
  }
})

export default router
