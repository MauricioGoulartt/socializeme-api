import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import { config } from 'dotenv'
import path from 'path'

config({ path: path.resolve('./src/config/.env') })

import routes from './api/routes'

const app = express()

// Configurações do Express
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Conexão com o MongoDB
const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
  throw new Error('MONGO_URI is not defined in .env')
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })

// Rotas
app.use('/api', routes)

// Tratamento de erros
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  }
)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app
