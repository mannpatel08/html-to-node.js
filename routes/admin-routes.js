const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controllers');

// Dashboard Route
router.get('/', adminController.getDashboard);

// Add User Page Route
router.get('/add-user', adminController.getAddUserPage);

// Add User POST Route
router.post('/add-user', adminController.addUser);

// Basic Inputs Page Route
router.get('/basic-inputs', adminController.getBasicInputsPage);

// Users List (Box Format) Route
router.get('/users-list', adminController.getUsersList);

// Basic Inputs POST Route
router.post('/basic-inputs', adminController.postBasicInputs);

module.exports = router;
