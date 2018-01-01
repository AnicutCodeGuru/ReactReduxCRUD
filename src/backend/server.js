import express from "express";
import mongodb from "mongodb";
import bodyParser from "body-parser";


const MongoClient =mongodb.MongoClient;

const app= express();
const dbUrl ="mongodb://localhost:27017/blue";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



MongoClient.connect(dbUrl, function(err,database){
    if(err){
        console.log(err)
    }else{
        app.listen(4000,()=>console.log("Server running on 4000"));
        
       /**Route to handle the get company list */
        app.get("/api/companyList/",(req,res)=>{
            database.db("blue").collection("companies").find().toArray((err,companyList)=>{
                res.json({companyList});
            })
        }) 
        
         /**Route to handle the create company   */
        app.post("/api/createCompany/",(req,res)=>{
            database.db("blue").collection("companies").insert({companyName:req.body.companyName},(err,resp)=>{
                res.json({msg:"Company Created"});  
            });
        }) 
       
        /**Route to handle the get activity list */
        app.get("/api/activityList/",(req,res)=>{
            database.db("blue").collection("activities").find().toArray((err,activityList)=>{
                res.json({activityList});
            })
        }) 
        
        /**Route to handle the create activity action   */
        app.post("/api/createActivity/",(req,res)=>{
            database.db("blue").collection("activities").insert({activityName:req.body.activityName},(err,resp)=>{
                res.json({msg:"Activity Created"});  
            });
        }) 
        
        /**Route to handle the get recorded activity list */
        app.get("/api/recordedActivityList/",(req,res)=>{
            database.db("blue").collection("recorded_activities").find().toArray((err,reccordedActivityList)=>{
                res.json({reccordedActivityList});
            })
        }) 
        
        /**Route to handle the create activity action   */
        app.post("/api/createRecordActivity/",(req,res)=>{
            database.db("blue").collection("recorded_activities").insert(
                {
                    activityID: mongodb.ObjectID(req.body.activityID),
                    companyID:mongodb.ObjectID(req.body.companyID),
                    activityDesc:req.body.activityDesc
                },(err,resp)=>{
                res.json({msg:"New Activity Recorded"});  
            });
        }) 
    }
});


