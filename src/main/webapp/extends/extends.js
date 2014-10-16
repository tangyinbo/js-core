/**
 * Created by canton_cowboy on 2014/10/10.
 */
(function () {
    function Person(name) {
        this.name = name;
    }

    function Student(grade,name) {
        Student.superClass.constructor.call(this,name);
        this.grade = grade;
    }

    /**
     * 继承通用工具类
     */
    function extendsUtils(subClass,superClass){
        //我们定义一个中间转换类
        function _temp(){}
        var superPro = superClass.prototype;

        //中间对象原型链指向父类型原型链
        _temp.prototype =superPro;

        //子类对象原型链指向中间对象原型链
        subClass.prototype = new _temp();

        //扩展子类的属性superClass = 父类的原型prototype ,可以通过superCalss.constructor 获取父类的构造器如: Person.call(this,XXX);
        subClass.superClass = superPro;

        //;还原子类的构造器
        subClass.prototype.constructor = subClass;

        //为了防止误操作破坏了父类的原型链的构造器,下面还原
        if(superClass.prototype.constructor = Object.prototype.constructor){
            superClass.prototype.constructor=superClass;
        }
    }

   extendsUtils(Student,Person);
    Student.prototype.showName=function(){
        alert(this.name+":"+this.grade);
    }
    var s = new Student("一年级","tangyiknbo");
    s.showName();

})();
