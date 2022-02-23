const Employee = require('../lib/Employee.js')

class Intern extends Employee{
    constructor(name,id,email,school){
    super(name,id,email)
    this.school = school
    }
    Intern = Object.create(Employee)

    getSchool(){
        return this.school
    }

    getRole(){
        return 'Intern'
    }
}
module.exports = Intern