let express = require('express') 

let app = express() 

let data = require('./public/employees.json') 

app.get('/test ' , function(req , res){
    res.send("Hello World")
})



app.get('/emplpoyees' , (req , res) =>{
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





const port = process.env.PORT || 3000 ;

app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})







