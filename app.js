const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/admin-routes');

const app = express();
const PORT = process.env.PORT || 9000;

// Connect to Database
connectDB();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Global variable for templates to prevent ReferenceError
app.use((req, res, next) => {
  res.locals.users = [];
  next();
});

// Serve static assets from the public directory
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Routes
app.use('/', adminRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
