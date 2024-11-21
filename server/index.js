import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import pqrsfRoutes from './routes/pqrsf.js';
import pool from './config/database.js';
import { hashPassword } from './utils/auth.js';

dotenv.config();

const app = express();


app.get('/', (req, res) => {
  res.redirect('/health'); // O cualquier otra ruta válida
});


// Configure CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'https://storied-malabi-d21d43.netlify.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Rutas
app.use('/api', authRoutes);
app.use('/api/pqrsf', pqrsfRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
