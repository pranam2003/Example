const express = require('express');
const app = express();
const PORT = 5000;
const db=require('./db');
const Person1=require('./mode/Person1');
const cors = require('cors');
app.use(cors());
app.use(express.json());



const bodyparser = require('body-parser');
app.use(bodyparser.json());  //req.body


app.get('/he', (req, res) => {
//   res.json({ message: 'Hello from server!' });
res.send("helhhhhhhhhhhhhhhelo");
});

app.post('/Person1',async (req,res)=>{
    try{
    // res.send("data is saved");
    const data = req.body // assuming the request body contains the person data
    const newperson= new Person1(data);
    // newperson.name=data.name;
   

    const response= await newperson.save();
    console.log("data saved");
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
}) 

app.get('/person1' , async(req,res)=>
{
    try{
        const data= await Person1.find()
        console.log("data fecth");
        res.status(200).json(data);


    }
        catch(err){
            console.log(err);
        res.status(500).json({error:"internal server error"});

        }

})

app.get('/person1/:workType',async(req,res)=>
{

        try{
            const workType=req.params.workType;
    if(workType=="chef" || workType=="waiter"|| workType=="manager"){
        const data= await Person1.find({work:workType})
        console.log('response is fetched');
        res.status(200).json(data);

        }else{
            res.status(404).json({error:'invalid work type'});
        }
    }
        catch(err)
        {
console.log(err);
        res.status(500).json({error:"internal server error"});


    }
});
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
}); 