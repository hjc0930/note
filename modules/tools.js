/* 
function add(x,y){
    return x + y;
}

function subtract(x,y){
    return Math.abs(x - y);
}

function ride(x,y){
    return x * y;
}


function divide(x,y){
    return x / y;
} */

/* class ufunc{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    async add(){
        return this.x + this.y;
    }
    async subtract(){
        return this.x - this.y;
    }
    async ride(){
        return this.x * this.y;
    }
    async divide(){
        return this.x / this.y;
    }
} */

let ufunc = {
    add: function(x,y){
        return x + y;
    },
    subtract: function(x,y){
        return x - y;
    }
}
module.exports = ufunc;

/* exports.add = function(x,y){
    return x + y;
} */