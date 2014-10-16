var myNameSpace={}
myNameSpace.cow=(function(){
   function _extends(subClass,superClass){
        function _temp(){};
       var subClassPro,superClassPro=superClass.prototype

       _temp.prototype = superClassPro;

       subClass.prototype =subClassPro= new _temp();

       subClassPro.constructor = subClass;

       if(superClassPro.constructor = Object.prototype.constructor){
           superClassPro.constructor = superClass;
       }
   };
    return {
        cow_Extends:function(subClass,superClass){
            _extends(subClass,superClass);
        }
    }
})();

function Person(name){
    this.name = name;
}
Person.prototype.sayHello=function(){
    alert(this.name+"  .....hello person");
}

function Student(name,sex){
    Person.call(this,name);
    this.sex = sex;
}
Student.prototype.study=function(){
    alert("---i'm study....");
}

myNameSpace.cow.cow_Extends(Student,Person);
var s   = new Student('tangyinbo','male');
s.sayHello();