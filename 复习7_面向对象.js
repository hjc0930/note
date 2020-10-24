// 定义一个对象
let obj = {
    username: "小明",
    password: "123",
    sex: "man"
}

// 定义一个类
class User{
    constructor(username,password,sex){
        this.username = username;
        this.password = password;
        this.sex = sex;
    }

    getUser(){
        return this.username+","+this.password+","+this.sex;
    }
}

// 实例化
let user = new User("小明","123456","man");

// 调用类方法
console.log(user.getUser());