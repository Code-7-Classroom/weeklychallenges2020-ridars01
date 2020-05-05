let express = require('express') 
let app = express() 

let data = require('./public/employees.json') 


let Joi = require('joi') ; 
app.use(express.json()) ; 




//GET
app.get('/employees' , (req , res) =>{
    if(!data ){
        res.status(404).send(`Couldn't find the students`)
    }

    res.send(data)
})


app.get('/employees/:id' , function(req , res) {
    const sData = data.employees.find(function(employee){
        console.log(employee.id)

        return parseInt(req.params.id) === employee.id
    })

    if(!sData ){
        res.status(404).send(`Couldn't find the student id`)
    }


    res.send(sData)
})

//POST
app.post('/employees' ,(req , res) => {
    const  employee = {
        id: data.employees.length + 1 , 
        name: req.body.name 
    }
   /* employee = {
        name: 'Taqi' , 
        job : 'Tech engineer' , 
        id: 11 , 
        salary: 1100000 
    }*/
    data.employees.push(employee) ; 
    res.send(employee) ; 
}) ;


//PUT 
app.put('employees/:id' , (req , res) =>{

    const employee = employees.find(e => e.id === parseInt(req.params.id))
    if(!employee) res.status(404).send('The course with the given ID wasa not found')
    //Validation
    const schema ={
        name: Joi.string().required()
    } ;

    const result = Joi.validate(req.body , schema ) ; 
    if(results.error){
        res.status(400).send(result.error.details[0].message) ;
        return ; 
    }
    
    employee.name = req.body.name ; 
    res.send(employee) ; 

})

//DELETE
app.delete('/employees/:id', (req, res) => {
    const employee = data.employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send('The employee with the given ID was not found.');

  const index = data.employees.indexOf(employee);
  data.employees.splice(index, 1);

  res.send(employee);
});


const port = process.env.PORT || 3000 ;

app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})



