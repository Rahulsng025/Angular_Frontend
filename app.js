const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Mongoose = require('mongoose');

const chartRoute = require('./api/routes/pie-chart');
const userRoute = require('./api/routes/user-registration');

// Mongoose connectivity
Mongoose.connect(
	'mongodb+srv://Rahulsng025:7843914275@pie-chart.lxizt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

//Middlewares

// Request logger middleware function
app.use(morgan('dev'));

// Parse incoming request bodies in a middleware before your handlers
// Parse application/x-www.form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Cross-Origin-Resource-Sharing
app.use(cors());

//For Handling Routes request.
app.use('/chart', chartRoute);
app.use('/user', userRoute);

module.exports = app;
