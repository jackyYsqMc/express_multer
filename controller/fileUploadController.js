/**
 * Created by jackyMC on 2017/9/25.
 */
const  fs =require('fs');
const fileDAO=require('./../dao/fileUploadDAO')

const upLoadFile=(req,resp)=>{
        console.log(req.file);

           fileDAO.saveFile("uploads/"+req.file.filename).
           then(mesg=>{
               resp.send(req.file)
           })
               .catch(function(mesg){
               //存数据库失败，删除文件
               fs.unlink('./'+mesg,function(){
                   console.log("222222")
               })
               resp.send({message:'error'})
           })

}
const manyUploadFiles=(req,resp)=>{
    for(let file of req.files){
        fileDAO.saveFile("uploads/"+file.filename).
        then(mesg=>{
            resp.send(req.file)
        })
            .catch(function(mesg){
                //存数据库失败，删除文件
                fs.unlink('./'+mesg,function(){
                    console.log("222222")
                })
                resp.send({message:'error'})
            })
    }
    resp.send("ok")
}
const getFile=(req,resp)=>{
    let id = req.params.id;
    console.log(id)
    fileDAO.getFile(id)
        .then(value=>{
            console.log(value[0].filename)
            resp.render("index",{'imgsrc':value[0].filename})
        })
}

module.exports={
    upLoadFile,
    getFile,
    manyUploadFiles
}