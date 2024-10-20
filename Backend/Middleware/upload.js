const path= require('path')
const multer=require('multer')

const Storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
var upload=multer({
    storage:Storage,
})
testUpload=upload.fields([{ name: 'questions',maxCount: 5},{ name: 'answers', maxCount: 5},])
module.exports=testUpload