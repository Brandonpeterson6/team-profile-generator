const Intern = require('../lib/Intern')

test('import employees to intern', () => {
    let intern = new Intern('Vie', '2456', 'v@hotmail', 'WashU')
    expect(intern.name).toBe('Vie')
    expect(intern.id).toBe('2456')
    expect(intern.email).toBe('v@hotmail')

}
)

test('test for school', () => {
    let intern = new Intern('Koy', 'A4325', 'v@koy', 'MoonAcademy')
    expect(intern.school).toBeDefined()

})