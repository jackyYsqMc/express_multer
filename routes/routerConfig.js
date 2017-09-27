/**
 * Created by jackyMC on 2017/9/25.
 */
const fileRouter =require('./fileUploadRouter');
const express =require('express')
const router = express.Router();
router.use('/upload',fileRouter);
module.exports=router;