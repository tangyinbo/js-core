/**
 * Created by canton_cowboy on 2014/10/10.
 */
/**
 * 聚合我们可以有选择性的是用某个类或者一些类的方法
 */

(function(){
    var P = {
        name: 'tangyinbo',
        age: 123,
        show:function(){
            alert(this.name+":"+this.age);
        }
    }

    function polymers(from,dest){
        for(var key in from){
            if(!dest[key]){
                dest[key] = from[key];
            }
        }
    }

    var S={};

    polymers(P,S);
    S.show();
})();
