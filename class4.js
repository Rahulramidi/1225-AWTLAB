class employee{
    name;
    role;
    constructor(name,role){
        this.name=name;
        this.role=role;
    }
    display(){
        console.log("name of employee is :"+ this.name);
        console.log("role of employee is :"+ this.role);
    }
}
let stud=new employee("rahul","tester");
stud.display();     
