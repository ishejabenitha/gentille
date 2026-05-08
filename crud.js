import express from 'express';
import cors from 'cors';
const app = express();
import connection from './server.js';

app.use(express.json())
connection ();

app.get('/',(req,res)=>{
    res.send('homepage');
})

import mongoose from 'mongoose';
const UserSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true},
    phone:{type:Number,required:true},
    
},
 {timestamps:true},
);

const User = mongoose.model("students",UserSchema);
app.use (cors({
    origin:'http://localhost:5173'
}));

app.post('/add', async(req,res)=>{
    try{
        const {name,email,phone} = req.body
        if(!name){
            return res.status(403).json({message:"name is required "});
        } 

          const newUser = await User.create({
                name,email,phone
                
            });


            return res.status (201) .json({
                message:"newUser",
                User:newUser
            });

    }     catch (err){
            console.error(err);
            return res.status(500).json({ message: 'Server eror'})
        }
})

app.get('/list',async(req,res) => {

    try{

        const result = await User.find();

        return res.status(200) .json({

            list:result
        });
    }

    catch (err){

        console.error (err);
    }

});

app.get('/list/:_id',async(req,res) => {
    try{
        const _id = req.params._id;

        const result = await User.findById(_id);

        return res.status(200) .json({
            user:result
        });
    }

    catch (err){

        console.error (err);
    }
});
//updates
app.put('/update/:_id',async(req,res) =>{
    try{
        const {_id} = req.params
        const{name,email,phone}= req.body;
        let updatefields = {};
        if(name) updatefields.name = name;
         if(email) updatefields.email = email;
          if(phone) updatefields.phone = phone;
              await User.findByIdAndUpdate(_id,updatefields);
    return res.status(200).json({
        message:'updated'
     });

    } catch (err){
        console.error(err);
    } 
})
//delete
app.delete('/delete/:_id',async(req,res) =>{
    try{
        const _id = req.params._id;
        await User.findByIdAndDelete(_id);
        return res.status(200).json({
            message:'deleted success full'
        });

    }catch(err){
        console.error(err);
    }
})

app.listen(3000,()=>{
        console.log("http://localhost:3000");
 });