const express=require('express')
const router=express.Router();
router.post("/sendmessage",async (req,res)=>{
    const {budget,email,projectType,referencePhoto,referenceWebsite,username}=req.body;
    const accountSid = 'AC6f3f37103c2bb0a5eede6d25c7c05ffd';
const authToken = 'abd5e8d002780fef0d869905b7f80a83';
const client = require('twilio')(accountSid, authToken);

const msg=await client.messages
    .create({
        body: `Username: ${username}\nEmail: ${email}\nProject Type: ${projectType}\nReference Website: ${referenceWebsite}\nBudget: ${budget} ${referencePhoto}`,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+916392569054'
    })
    return res.json({message:"Working properly"})
})

module.exports=router