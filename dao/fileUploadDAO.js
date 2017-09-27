/**
 * Created by jackyMC on 2017/9/26.
 */
const pool =require('./../config/database');
const saveFile=(filenameDir)=>{
    return new Promise(function(resolve,reject){
        pool.query('insert into t_files values(?,?)',[filenameDir,null])
            .then(function(r){
                resolve("成功")
            })
            .catch(function(){
                reject(filenameDir)
            })
    })

}
const getFile=(id)=>{
    return new Promise(function(resolve,reject){
        pool.query('select * from t_files where id=?',[id])
            .then(function(r){
                resolve(r);
            }).catch(function(){
                reject('')
        })
    })
}

module.exports={
    saveFile,
    getFile
}