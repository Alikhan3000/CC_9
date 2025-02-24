//Task 1: Creating an Employee Class

class Employee {                                    //created a class with 2 string and 2 number variables
    constructor(name, id, department, salary){
        this.name = name;
        this. id = id;
        this. department = department;
        this.salary = salary;
    }



getDetails() {                                      //added a method that returnsa formatted string of employee details          
    return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
        
}


calculateAnnualSalary() {                            //added a method using the formula that returns employee's salary 
    return this.salary * 12;

} 

}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);     //test data

console.log(emp1.getDetails()); //logged the output of the functions using test data // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary()); // Expected output: 60000
