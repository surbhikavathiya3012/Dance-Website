const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views', path.join(__dirname,'views'))

app.get('/', (req,res)=>{
    res.status(202).render(`home.pug`);
})

app.get('/contact', (req,res)=>{
    res.status(202).render(`contact.pug`);
})

app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`);
});