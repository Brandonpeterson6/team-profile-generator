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

    getRole(){//ask why this is nesisary- I know it is but why?
        return 'Intern'
    }
}
module.exports = Intern