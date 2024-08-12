require('dotenv').config();
const express=require('express')
const router=express.Router();
router.post("/sendmessage",async (req,res)=>{
    const {budget,email,projectType,referencePhoto,referenceWebsite,username}=req.body;
  
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const msg=await client.messages
    .create({
        body: `Username: ${username}\nEmail: ${email}\nProject Type: ${projectType}\nReference Website: ${referenceWebsite}\nBudget: ${budget} ${referencePhoto}`,
        from: process.env.TWILIO_WHATSAPP,
        to: process.env.TWILIO_TO
    })
    return res.json({message:"Working properly"})
})

module.exports=router