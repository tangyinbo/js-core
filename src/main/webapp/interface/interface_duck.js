/**
 * Created by canton_cowboy on 2014/10/12.
 */
/**
 * 鸭式检验法
 */
//定义一个公共接口检验类
/**
 *
 * @param name     接口名称
 * @param method  [] 包含所有的方法名称描述的数组
 * @constructor
 */
function InterfaceFactory(){

}
/*获取接口实列*/
InterfaceFactory.getInstance=function(name,methods){
    //检验属性
    if(typeof name != "string"){
        throw new Error("InterfaceFactory properties name type error expect string actual " +typeof name);
    }
    if(methods.__proto__.constructor != Array){
        throw new Error("InterfaceFactory properties methods type error expect Array actual" +typeof name);
    }
    return {
        name:name,
        methods:methods
    }
}

/*检验接口是否实现了指定的接口*/
/**
 *
 * @param implementObject   检验对象
 * @param interfaces    [] 检验的接口数组
 */
InterfaceFactory.examine=function(implementObject,interfaces){
    if(typeof implementObject != "object"){
        throw new Error("InterfaceFactory.examine() properties implementObject type error expect string actual " +typeof implementObject);
    }
    if(interfaces.__proto__.constructor != Array){
        throw new Error("InterfaceFactory.examine() properties interfaces type error expect Array actual " +typeof interfaces);
    }
    //检验对象是有指定接口的所有的方法
    for(var i=0;i<interfaces.length;i++){
        var _interface = interfaces[i];
        if(!_interface)continue;
        //遍历接口的每一个方法
        for(var j=0;j<_interface.methods.length;j++){
            var _interface_method=_interface.methods[j];
            console.log(_interface_method)
            if(!implementObject[_interface_method] || typeof implementObject[_interface_method] != 'function'){
                throw new Error(implementObject +"not implements  the "+_interface.name+"'s method "+_interface_method);
            }
        }
    }
};
var U=InterfaceFactory.getInstance("UserInterface",['add','subtraction']);
var S=InterfaceFactory.getInstance("Test2",['save']);
var UserColculateInterface=function(){
    this.add=function(){alert('add')}
    this.subtraction=function(){}
    InterfaceFactory.examine(this,[U,S]);
}

var b = new UserColculateInterface();
b.add();