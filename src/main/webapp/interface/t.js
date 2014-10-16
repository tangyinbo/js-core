/**
 * Created by canton_cowboy on 2014/10/12.
 */
(function(){
   function Person(){
       this.call=function(){
           alert("call....")
       }
   }
    var p = eval("new Person()");
    p.call();
})();