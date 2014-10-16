/**
 * Created by canton_cowboy on 2014/9/30.
 */
//js的链式调用
(function(){
    function Person(name){
        this.name = name;
        this.say=function(){
            document.write(name+"....say..");
            return this;
        }
        this.sing=function(){
            document.write(name+"....sing..");
            return this;
        };
    };
    var p = new Person("tangyinbo");
    p.say().sing();
});//();

//
Function.prototype.method=function(name,fn){
    this.prototype[name]=fn;
    return this;
};
(function(){

    function _$(ele){
        if(ele){
            if(ele.indexOf("#")!=-1){
                return document.getElementById(ele);
            }
        }
     };

    _$.onready=function(fn){
        window.$=function(ele){
            return new _$(ele);
        }
        fn();
    }
    _$.method("click",function(ele,fn){
      //  console.log(this)
        fn();
    }).method("addEvent",function(ele,fn){
        fn();
    }).method("addClass",function(ele,fn){
         fn();
     });

    _$.onready(function(){
        $("#div").click('',function(){
            console.log(this.innerHTML)
        })
        console.log($("#div"));
    })
})();
