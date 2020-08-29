// TODO: Write code to define and export the Employee class
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

class Employee {
    constructor (nameProp, idProp, emailProp) {
    this.name = nameProp;
    this.id = idProp;
    this.email = emailProp;
    }
}

module.exports = Employee;