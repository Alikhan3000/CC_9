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

//Task 2: Creating a Manager Class (Inheritance & Method Overriding)

class Manager extends Employee{                             //created a class "Manager" that inherited "Employee" class's properties
    constructor(name, id, department, salary, teamSize){    //added a new property 
        super(name, id, department, salary);                //The parent class constructor is used to initialize the previous variables
        this.teamSize = teamSize;
    }

    getDetails(){                                           //overrided getDetails to include new property  
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus(){                                       //method that returns bonus (10% of the manager's annual salary)
        return this.salary * 0.1;
    }

}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); //test data
console.log(mgr1.getDetails());                             //logged the output using test data
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600