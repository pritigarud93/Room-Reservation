const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res)=> {
    res.send("Hello World!!");
 });

 app.get('/about',(req, res) => {
    res.send("about Page");
 });

 app.get('/contact', (req, res) => {
     res.send("contact");
 })

 
app.listen(port, () =>{
    console.log(`Server is running at port:${port}`);
});

