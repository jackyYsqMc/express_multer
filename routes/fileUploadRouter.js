/**
 * Created by jackyMC on 2017/9/25.
 */
const express =require('express');
const fileUploadController =require('./../controller/fileUploadController')
const router = express.Router();
const multer = require('multer');

const storage=require('./../config/upLoadFileConfig')
const upload = multer({storage:storage})

router.route('/singleUploadFile')
.post(upload.single('aa'),fileUploadController.upLoadFile)
router.route('/getFile/:id').get(fileUploadController.getFile)
router.route('/manyUploadFile')
    .post(upload.array('photos',3),fileUploadController.manyUploadFiles)
module.exports=router