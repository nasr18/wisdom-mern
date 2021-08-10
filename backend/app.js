require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db.config');

const app = express();

// routes
const todo = require('./routes/todo.routes');

// connect database
connectDB();

// initialize middleware
app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Server up and running'));

// use routes
app.use('/api/todo', todo);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`wisdom server is running on http://localhost:${PORT}`);
});
