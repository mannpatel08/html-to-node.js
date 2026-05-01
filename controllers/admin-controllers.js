const User = require('../models/admin-models');

// Render Dashboard
exports.getDashboard = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.render('index', { users });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Server Error');
  }
};

// Render Add User Page
exports.getAddUserPage = (req, res) => {
  res.render('addUser');
};

// Handle Add User POST request
exports.addUser = async (req, res) => {
  try {
    const { fullname, company, email, phone, message } = req.body;
    
    const newUser = new User({
      fullname,
      company,
      email,
      phone,
      message
    });

    await newUser.save();
    console.log('User added successfully:', newUser);
    res.redirect('/users-list'); // Redirect to Users List after success
  } catch (error) {
    console.error('Error adding user:', error.message);
    res.status(500).send('Server Error');
  }
};

// Render Basic Inputs Page
exports.getBasicInputsPage = (req, res) => {
  res.render('basicInputs');
};

// Render Users List (Box Format)
exports.getUsersList = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.render('usersList', { users });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Server Error');
  }
};

// Handle Basic Inputs POST (Placeholder)
exports.postBasicInputs = (req, res) => {
  console.log('Form Data received:', req.body);
  res.redirect('/users-list'); // Just redirect for now
};
