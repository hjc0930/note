/* function callSevne(success){
    return new Promise((resolve,reject)=>{
        console.log("Calling Steven......");
        setTimeout(()=>{
            if(success){
                resolve();
            }else{
                reject();
            }
        },3000);
    })
}

callSevne(false)
    .then(()=>{
        console.log("Steven picked up the phone.");
    })
    .catch(()=>{
        console.log("Steven reject the call.")
    })
(async ()=>{
    try {
        await callSevne(false);
        console.log("Steven picked up the phone.");
    } catch (error) {
        console.log("Steven reject the call.")
    }
})() */


// Promise一般作为函数的返回值
/* function getInfo(success){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(success){
                res(1);
            }else{
                rej(2);
            }
        },2000)
    })
} */

//.then执行的是resolve，.catch执行的是reject
/* getInfo(false).then((data)=>{
    console.log(`status:${data},msg:成功`);
}).catch((data)=>{
    console.log(`status:${data},msg:成功`);
}) */

// 使用async await的写法来替代 .then，减少了回调地狱出现的可能
/* (async ()=>{
    try {
        let i = await getInfo(true);
        console.log(i);
    } catch (error) {
        console.log(error);
    }
})(); */