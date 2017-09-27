/**
 * Created by jackyMC on 2017/9/26.
 */
//配置上传路径和重命名
const multer = require('multer');
const crypto = require('crypto')
const storage = multer.diskStorage({

    //保存路径
    destination : function(req, file, cb){
        cb(null, 'public/uploads');
    },

    //重命名  官方文件名加密未带后缀，老子把它重写了，自己看！！！
    filename : function(req, file, cb){
        var fileFormat = (file.originalname).split('.');
        crypto.pseudoRandomBytes(16, function (err, raw) {
            console.log(raw.toString('hex'))
            cb(err, err ? undefined : raw.toString('hex')+"."+fileFormat.pop())
        })
    }
})
module.exports=storage;