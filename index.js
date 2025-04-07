var express = require("express");
require("./db");
var app = express();
var port = 2000;
var sModel = require("./model/main");
// middleware to add data to db
app.use(express.json());


  app.post("/", (req, res) => {
    try {
      sModel(req.body).save();
      res.send("Data added");
    } catch (err) {
      res.send(err);
    }
  });
  // get
app.get('/',async(req,res)=>{
    try {
        var data = await sModel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
        
    }
})
// / get by one
app.get('/:id',async(req,res)=>{
    try {
        var data = await empmodel.findById(req.params.id);
        res.send(data)
    } catch (error) {
        res.send (error)
    }
})
// delete
app.delete('/:id', async (req, res) => {
    try {
      console.log(req.params.id);
      await sModel.findByIdAndDelete(req.params.id);
      res.send("Data deleted");
    } catch (error) {
      res.send(error);
    }
  });
  // Update an employee by ID
app.put('/:id', async (req, res) => {
  try {
      var update = await sModel.findByIdAndUpdate(req.params.id,req.body);
        res.send("updated");
  } catch (error) {
      res.send(error)
  }
});
  

  app.listen(port, () => {
    console.log(`SERVER IS UP AND RUNNING IN ${port}`);
  });