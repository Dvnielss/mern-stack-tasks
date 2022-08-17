const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose}  = require('./database');

const app = express();


//Settings 
app.set('port', process.env.PORT || 5000);


//Middlewares (Funciones que se ejecutan antes de las rutas)
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks',require('./routes/task.route'));


//Static files
app.use(express.static(path.join(__dirname, 'public')));



//Startig the server


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});