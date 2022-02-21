class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }  

    getName() {
        console.log(name)
        return this.name
    }

    getId() {
        console.log(id)
        return this.id
    }

    getEmail() {
        console.log(email)
        return this.email
    }

    getRole() {//returns employee
        console.log(employee)
        return  'employee'
    }   
}        

module.exports = Employee