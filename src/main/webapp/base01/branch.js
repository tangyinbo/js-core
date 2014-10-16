/**
 * Created by canton_cowboy on 2014/10/8.
 */
(function(){
/*    var d = new Date();
    document.write(d.getDay()+"<br/>");
    document.write(d.getYear()+"<br/>");
    document.write(d.getMonth()+1+"<br/>");
    document.write(d.getDate()+"<br/>");
    document.write(d.getHours()+"<br/>");
    document.write(d.getMinutes()+"<br/>");
    document.write(d.getSeconds()+"<br/>");
    alert(window.prompt("helloworld",'aa')?"有输入":"没有输入");*/
    onerror=handleErr
    var txt=""

    var a ="hello";
    switch(a){
        case "hello":
            alert("hello world");
            break;
        case "world":
            alert("world");
            break;
        default :
            alert('haaha')
            break;
    }

})();
function handleErr(msg,url,l)
{
    txt="There was an error on this page.\n\n"
    txt+="Error: " + msg + "\n"
    txt+="URL: " + url + "\n"
    txt+="Line: " + l + "\n\n"
    txt+="Click OK to continue.\n\n"
    alert(txt)
    return true
}

function message()
{
    adddlert("Welcome guest!")
}