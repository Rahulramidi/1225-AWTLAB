class parent{
    display(){
    console.log("in parent class");
    }
}
class child extends parent{

    display1(){
        super.display();
    console.log("in child class");
    }
}
let s=new child();
s.display1();