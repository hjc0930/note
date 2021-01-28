/**
 * 
 * let和const
 * 
 */

/* var a = 123;
let b = 123;

// console.log(window.a);
// console.log(window.b); // ReferenceError: window is not defined

const I = 1; */

// console.log(window.I); // ReferenceError: window is not defined

/**
 * 
 * 解构赋值
 * 
 */

/* let x = 33;
let y = 22;

[x,y] = [y,x];
console.log(x+'---'+y); */
/* 
function fn() {
  return {a:"小明",b:20};
}

const {a,b} = fn();
console.log(a+'---'+b); */
/* 
function fn({x,y,z}) {
  console.log(x);
  console.log(y);
  console.log(z.z.a);
}

fn({z:{a:1,b:2},x:1,y:2}); */

/* function fn(x:number,y:number,...z:number[]):void {
  console.log(x);
  console.log(y);
  console.log(z);
}

fn(1,2); */

/* let obj = {
  a:1,
  b:2
}

let {b} = obj;
console.log(b);  */

/* let map = new Map();
map.set("name","小明");
map.set("age",20); */

/* console.log(map);                  // Map { 'name' => '小明', 'age' => 20 }
console.log(map.entries()); */        // [Map Entries] { [ 'name', '小明' ], [ 'age', 20 ] }
/* for(let [a,b] of map.entries()) {
  console.log(a);       
  console.log(b);
} */
/* console.log(map);
console.log(map.entries()); */
/* 
let set = new Set([1,2,3,3,3]);
console.log(set); */

/* var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.entries()); */
/* 
let hello = 123;
console.log('hell\u{6f}'); */

/* let str = "How are you are are";
console.log(str.match("are")); */

let str = "How are you Are are are";
// console.log(str.charAt(4));       //返回指定索引的字符串
// console.log(str.indexOf("are"));     // 返回指定字符串第一次出现的索引
// console.log(str.lastIndexOf("are")); // 返回指定字符串最后一次出现的索引
// console.log(str.substring(0,9));  // 返回指定区间的字符串
// console.log(str.slice(0,0));      // 返回指定区间的字符串，索引可以为负值
// console.log(str.substr(0,3));     // 返回指定长度的子串
// console.log(str.concat(" yes"," no"));
/* let num = 123;
console.log(num.toString()); */
// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());

// console.log(str.match(/are/));
// console.log(str.replace(/are/g,"at"));
// console.log(str.split(/are/ig));
// console.log(str.includes("are"));
// console.log(str.endsWith("e"));
// console.log(str.repeat(2));
// console.log(str.match(/are/g));

let arr = [1,2,3,4,5,6];
/* console.log(arr.reduce((prev,next)=>{
  return prev * next;
})); */
// console.log(arr.copyWithin(0,1,3));
