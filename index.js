//index.js
const  {a,b,c,d=400,foo} =require('alan_lib');
var add=function(){
    return a+b
}
var module={add,operation:c+d,foo};

console.log(module)
module.exports=module;