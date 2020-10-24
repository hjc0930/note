const fs = require('fs');

exports.mkDir = function(api){
    fs.stat(api,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        if(data.isFile()){
            console.log("是文件");
        }else if(data.isDirectory()){
            console.log("是文件夹");
        }
    })
}