const path = require('path');                      // ✅ must be before dotenv
const dotenv = require('dotenv');                  // ✅ import dotenv first
dotenv.config({ path: path.resolve(__dirname, '../.env') }); // ✅ load the env

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userroutes');
const { errorHandler } = require('./middleware/errormiddleware');

// Show the loaded URI for debugging
console.log("MONGO_URI from env:", process.env.MONGO_URI);

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(morgan('dev'));
app.use(express.json());

app.get('/api/health', (req, res) => res.status(200).json({ status: 'OK' }));

app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
