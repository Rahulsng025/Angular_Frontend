const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user-registration');

//Handling incomming GET request to user route
router.get('/', (req, res, next) => {
	User.find()
		.then((doc) => {
			console.log(doc);
			res.status(200).json(doc);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

// Handling incomming GET by Id request to user route
router.get('/:userId', (req, res, next) => {
	const id = req.params.userId;
	User.findById(id)
		.exec()
		.then((doc) => {
			console.log('From Database', doc);
			if (doc) {
				res.status(200).json(doc);
			} else {
				res.status(404).json({
					message: 'No valid entry found for provided entry'
				});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

// Handling incomming POST request to user route
router.post('/', (req, res, next) => {
	const user = new User({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		email: req.body.email,
		dob: req.body.dob,
		gender: req.body.gender,
		contact: req.body.contact,
		country: req.body.country
	});
	user
		.save()
		.then((doc) => {
			console.log(doc);
			res.status(201).json({
				message: 'Handling POST request route to User',
				createdStudent: user
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

module.exports = router;
