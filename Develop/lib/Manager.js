// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager {
    constructor(officeNumber) {
        this.officeNum = officeNumber;
    }
}

module.exports = Manager;