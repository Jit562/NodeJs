const express = require('express')
const app = express()
app.use(express.json());
const courses = [{
    id:1,
    name:'om',
    city:'Delhi'
},
{
    id:2,
    name:'shivam',
    city:'Noida'
},
{
    id:3,
    name:'ranu',
    city:'New Ashok Nagar'
}]

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/course', (req, res) => {
    res.send(courses)
});

app.get('/course/:id', (req, res) => {
    const courseId = req.params.id;
    const course = courses.find((c) => c.id===parseInt(courseId));
    if(!course){
        res.status(404).send("course not fund");
    } else res.send(course);  
});

app.post('/course', (req, res) => {
    if(!req.body.name) res.send("name and city is required fields");
    else{
        const course = {
            id:courses.length + 1,
            name:req.body.name,
            city:req.body.city
        };

        courses.push(course);
        res.send(course);
    }
});


app.listen(3000)
console.log("The server port is : 3000")