const express = require('express');
const exphbs = require('express-handlebars');
const taskController = require('./controllers/taskController'); 
const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(taskController);




app.listen(PORT, function(){
    console.log('Server is running on port ', PORT);
});