//Task 1: Creating an Employee Class and Task 4(modification): Implementing a Payroll System

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
    if (this.teamSize !== undefined){                   
        return this.salary * 12 + this.calculateBonus();    //modified calculateAnnualSalary() in the Employee class
    }else{                                                  //used if else statement to calculate annual salary 
        return this.salary * 12;                            //basically if an employee does not have a team (teamSize = undefined), the function treats the person as an employee
    }                                                       //if employee has a team (manager) the bonus is added to the total salary 
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
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus(){                                       //method that returns bonus (10% of the manager's annual salary)
        return this.salary * 12 * 0.1;
    }

}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); //test data
console.log(mgr1.getDetails());                             //logged the output using test data
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600

//Task 3: Creating a Company Class and Task 4: Implementing a Payroll System

class Company {                                         //created a class with one string variable and and array
    constructor(name){
        this.name = name;                               //initialized a string property "name"
        this.employees = [];                            //initialized an array "employees"
    }

    addEmployee(employee) {                             //method that adds an employee to the array
        this.employees.push(employee)                   //new variable "employee" is added to the array using .push 
    }

    listEmployees(){                                    //method that logs employee's details using method from another class
        this.employees.forEach(function(employee) {
            console.log(employee.getDetails());         //forEach applies the function requirements for each element of the array
        });
    }

    //Task 5: Implementing Promotions

    promoteToManager(employee, teamSize){                               //created a method in the Company class
       for (let index = 0; index < this.employees.length; index++) {    //used for loop for the method
            if (this.employees[index] === employee){
                this.employees[index] = new Manager (employee.name, employee.id, employee.department, employee.salary, teamSize); //initialized manager properties
                return;                                                 //returned the object with updated position
            }
        
       } 
    }
    //added a method that returns the sum of all employee salaries (manager + employee) to the Company class
    calculateTotalPayroll(){
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0);}  //used reduce to get a single value from the array 

}

const company = new Company("TechCorp");

company.addEmployee(emp1); //added an employee and a manager to the array 
company.addEmployee(mgr1);
company.listEmployees();   //listing all employees in the array
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"


//Task 4: Implementing a Payroll System
//added a method to the company class that returns the sum of all employee salaries (manager + employee) to the Company class
//modified calculateAnnualSalary() in the Employee class
//logged total payroll, which includes employee's and manager's salaries + bonus for managers
console.log(`Total Payroll: $${company.calculateTotalPayroll()}`); 
// Expected output: 165600 (assuming emp1 and mgr1 salaries)


//Task 5: Implementing Promotions

//created a method in the Company class
company.promoteToManager(emp1, 3);      
company.listEmployees();                //list all employees and their details
// Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"