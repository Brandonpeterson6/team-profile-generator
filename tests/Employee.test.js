const Employee = require('../lib/Employee.js')//import employee


test('create an employee object', () =>{
    const employee = new Employee ('Dan','1192', "cat@email",'Manager')
    expect(employee.name).toBe('Dan')
    expect(employee.id).toBe('1192')
    expect(employee.email).toBe('cat@email')
    expect(employee.getRole).toBeDefined()
    })