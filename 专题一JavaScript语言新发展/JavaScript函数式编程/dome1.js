// var checkage=min=>(age=>age>min);
// var checkage18=checkage(18);
// console.log(checkage18(30));

// 函数柯里化code
// function add(x,y) {
//     return x+y;
// }
// console.log(add(1,2));
// //柯里化
// function addX(y) {
//     return function (x) {
//         return x+y;
//     };
// }
// console.log(addX(2)(3));
//函数柯里化
// function foo(p1,p2){
//     this.val=p1+p2;
// } ;
// var bar=foo.bind(null,"p1");
// var baz= new bar("p2");
// console.log(bar);
// 尾调用优化
function factoria(n) {
    if (n === 1) {
        return 1;
    }
    return n * factoria(n - 1);
}
let fac=factoria(10);
console.log("没有进行优化："+fac);
// 尾调用优化
function factorial(n,tatal) {
    if (n===1) {
        return tatal;
    }
    console.log(n);
    return factorial(n-1,n*tatal);
}
 fac=factorial(10,1);
console.log(fac);
 
