const express = require("express")
const app=express()
const mysql=require("mysql2")
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config()

app.use(express.json());
const port=process.env.PORT
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"studentt"
})
db.connect(()=>{
    console.log("database connected")
})
app.get("/all", (req, res) => {
    const sql = "SELECT * FROM userss";

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "data are not fetched" });
        }

        res.status(200).json({message: "users are fetched",result: result
        });
    });
});
app.get('/all/:id', (req, res) => {
    const id = req.params.id; 
    const sql = "SELECT * FROM userss WHERE id=?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(400).json({ message: "User not fetched" });
        }

        res.status(200).json({ message: "User fetched", result });
    }) });

    app.put('/edit/:id', (req,res) =>{
        const { id } = req.params;
        const { name, password } = req.body;
        const sql = "UPDATE userss SET name=?, password = ? WHERE id=?";

        db.query(sql, [ name, password, id], (err, result) =>{
            if(err) return res.status(501).json({msg:"Error", err});
            return res.status(201).json({msg:"User Updated Successfully", result});
        })
    });






    app.delete('/delete/:id', (req,res) =>{
        const { id } = req.params;
        const sql = "DELETE FROM userss  WHERE id=?";

        db.query(sql, [id], (err, result) =>{
            if(err) return res.status(501).json({msg:"Error", err});
            return res.status(201).json({msg:"User Deleted Successfully"});
        })
    });



app.listen(8000,()=>{
    console.log(`running on sever 8000`)
})