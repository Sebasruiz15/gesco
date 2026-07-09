import express from 'express'
import cors from 'cors'
import { env } from './src/config/env.js'
import contactoRoutes from './src/routes/contactoRoutes.js'
import { errorHandler } from './src/middlewares/errorHandler.js'

const app = express()

app.use(cors({ origin: env.origenPermitido }))
app.use(express.json())

// Healthcheck simple: útil para confirmar que el server está arriba
// antes de siquiera probar el formulario.
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/contacto', contactoRoutes)

// El errorHandler SIEMPRE va de último: Express lo reconoce como manejador
// de errores precisamente porque recibe 4 argumentos (err, req, res, next).
app.use(errorHandler)

app.listen(env.puerto, () => {
  console.log(`✅ Backend GESCO corriendo en http://localhost:${env.puerto}`)
})
