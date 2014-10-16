/**
 * Created by canton_cowboy on 2014/10/9.
 */
var Cate={};
/**
 * new 对象的__proto__属性引用的是构造函数的prototype
 *可以使用以下的两种方式扩展
 */
Object.getPrototypeOf(Cate).name="tangyinbo";
Cate.__proto__.sex="male";
//alert(Cate.name+"--"+Cate.sex)
function Person(){}
/*Object.getPrototypeOf(Person).showName=function(){
    alert("showName....")
}*/
Person.prototype.showName=function(){
    alert("show Name..")
}
var p = new Person();
p.__proto__.showAge=function(){
    alert("show Age...")
}
p.showName();
p.showAge();

var b = new Person();
b.showAge();


