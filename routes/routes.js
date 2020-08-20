var express = require("express");

var app = express();

var router = express.Router();

var db = require("../models/connect")


router.get("/", (req,res) =>{

   db.Todo.find({})
   .then((todos)=>{

   	 res.json(todos);

   })
   .catch((err)=>{

   	res.send(err);

   })

});



router.post("/", (req,res)=>{

   db.Todo.create(req.body)
   .then((newtodo)=>{

   	 res.status(201).json(newtodo);
   	 console.log(newtodo);

   })
   .catch((err)=>{

   	res.send(err);

   })

});


router.get("/:todoid", (req,res)=>{

	db.Todo.findById( req.params.todoid)
	.then((foundtodo)=>{

   	 res.json(foundtodo);
   	 console.log(foundtodo);

   })
   .catch((err)=>{

   	res.send(err);

   })

});



router.put("/:todoid", (req,res)=>{

	db.Todo.findOneAndUpdate( {_id : req.params.todoid}, req.body, {new : true})
	.then((todo)=>{

   	 res.json(todo);
   	 console.log(todo);

   })
   .catch((err)=>{

   	res.send(err);

   })

});


router.delete("/:todoid", (req,res)=>{

	db.Todo.remove( {_id : req.params.todoid})
	.then(()=>{

   	 res.json({ message : "We deleted it"});
  

   })
   .catch((err)=>{

   	res.send(err);

   })

});


module.exports = router;
