/**
 * Created by canton_cowboy on 2014/10/12.
 */
(function(){
    function Person(){
        this.name ="tangyinbo";
    }
    Person.prototype.age = 11;
    var p = new Person();
    alert(p["age"]);
})();