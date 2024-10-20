const test=require("../Models/test-models");

const addTest=async (req,res)=>{
    try { 
        const testCreated = await test.create({
            subject: req.body.subject,
            question: req.body.question,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3,
            option4: req.body.option4,
            answer:req.body.answer,
        });
        
        res.status(200).json(
            {
                msg:testCreated
                 
            });
    } catch (error) {
        console.log("internal server error",error);
    }
}
module.exports={addTest}