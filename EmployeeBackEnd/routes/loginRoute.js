const express = require('express');
const methodOverride = require('method-override');
const defaultRouter = express.Router(); 
defaultRouter.use(express.json());
defaultRouter.use(express.urlencoded({extended:true}));
defaultRouter.use(methodOverride('_method'));
const userModel = require('../model/userData');
const jwt= require('jsonwebtoken');

/***************************route******************/
// Login
defaultRouter.post('/',async (req,res)=>{ 
  console.log(req.body);
    
  const user= await userModel.findOne({Email:req.body.Email})  
  if(!user){
      res.status(404).send({message:'User not found'});
  }
  try{
    if(user.Password==req.body.Password){
      const payload={Email:user.Email,Password:user.Password};
      const token= jwt.sign(payload,'employeeAppUser');
      if ((user.Email=='admin@abc.com')&& (user.Password=='12345')) {
        const token= jwt.sign(payload,'admin');
        res.status(200).send({message:'Admin',key:token,role:'admin'})
      }               
      res.status(200).send({message:'Login Successful',key:token,role:'user'}) 
    }
    else{
      res.status(400).send({message:'Invalid credentials'})
    }
  }catch (error){
      console.log(error);
  }
});
// register
defaultRouter.post('/add',async (req,res)=>{ 
                  // console.log(req.body);
              try{
                const item = req.body;
                const defaultdata = new userModel(item);
                await defaultdata.save();
                res.send({message:'Registeration Successful!'});
              } catch (error) {
                res.status(404).send('Registeration UnSuccessful');
              }
    
});



module.exports = defaultRouter;