const Manager = require('../lib/Manager.js')//import employee

//IMPORTANT NOTE - Manger is what will be called in the final file that builds the HTML, so DO NOT try to make it part of the array. This of it like an object ID


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