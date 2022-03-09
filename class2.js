class student{
     rollno=12;
    
    display(){       
        console.log("students are in class");
    }
    display3(){
        console.log("roll number is"+this.rollno);
    }
}
let s=new student();
s.display();
s.display3();
