function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  function Employee(name, age, jobTitle) {
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
  }
  
  Employee.prototype = Object.create(Person.prototype);
  
  Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  };
  
  
  const personInstance = new Person("Alice", 30);
  personInstance.introduce(); 
  
  const employeeInstance = new Employee("Bob", 25, "Software Engineer");
  employeeInstance.introduce(); 
  employeeInstance.work(); 
  