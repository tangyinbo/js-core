/**
 * Created by canton_cowboy on 2014/10/14.
 */
function addEvent(obj,type,fn){
    if(obj.addEventListener){
        alert("aa")
    }else if(obj.attachEvent){
        alert("hehe")
    }
}

window.onload=function(){
    var btn = document.getElementById("btn");
    try{
        btn.addEventListener('click',function(){
            alert(this.value);
        },false)
    }catch(error){
        btn.attachEvent('onclick',function(){
            alert('hehe')
        })
    }

}