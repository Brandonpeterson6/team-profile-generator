const Manager = require('../lib/Manager.js')//import employee



test('create a manager object', () =>{
    let manager = new Manager('Dan','1192', "cat@email","manager",'234453456')
    expect(manager.name).toBe('Dan')
    expect(manager.id).toBe('1192')
    expect(manager.email).toBe("cat@email")

    })

test('office number added', () => {
    let manager = new Manager('Dan','119','dan@test','100')
    expect(manager.officeNumber).toBeDefined()// keeping test in for notes: toBeDefined makes sure that information is coming through
}
)