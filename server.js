const http = require('http');
const url = require('url');

http.createServer((req,res)=>{
    // 设置响应头
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('<head> <meta charset="UTF-8"></head>');
    res.write("你好 Node.js");

    // let api = url.parse(req.url,true).query;
    if(req.url !="/favicon.ico"){
        let {user,pwd} = url.parse(req.url,true).query;
        console.log(user+","+pwd);
    }

    res.end();
}).listen(8080);

console.log('http://localhost:8080');