const Engineer = require('./lib/Engineer.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./util/generate-site');
const fs = require('fs');

let teamARR = []



//make intern
const makeIntern = function() {

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the intern name?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter name');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter id');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter email');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is the employee school?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter school name');
              return false;
            }
          }
      }
    ])
    .then(({name,id,email,school}) => {
        let intern = new Intern(name,id,email,school)

        teamARR.push(intern)//push employee to array
        finishToPage()
    }) 
  };

//make engineer
const makeEngineer = function() {

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the engineer name?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter name');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter id');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter email');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the employee github?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter github');
              return false;
            }
          }
      }
    ])
    .then(({name,id,email,github}) => {
        let engineer = new Engineer(name,id,email,github)

        teamARR.push(engineer)//push employee to array
        finishToPage()
    }) 
  };

  const makeEmployee = function() {
    //ask for employee job
        inquirer
            .prompt({
                type: 'checkbox',
                name: 'role',
                message: 'What is the employee role?',
                choices: ['Intern', 'Engineer'],
                validate: descriptionInput => {
                    if (descriptionInput) {
                      return true;
                    } else {
                      console.log('Please enter role');
                      return false;
                    }
                  }
    
            })
            //NOTE!!! below used => because .then(function({name}) would create a new scope so the current enemy consol log wont work
            .then(({role}) => {

                if (role == 'Intern'){
                    console.log('you selected intern')
                    makeIntern()
                    return
                }
                else {
                    console.log('you selected engineer')
                    makeEngineer()
                }
            }) 
    }

    //check if another employee or push to render
    const finishToPage = function(){
        inquirer
        .prompt({
            type: 'confirm',
            name: 'newEp',
            message: 'Do you want to add another employee? y/N',
            default: true
    
        })
        .then(({newEp}) => {
            if (newEp == true) {
                console.log( 'answered true')
                makeEmployee()
                return
            }
            else{
                copyFile(writeFile(generatePage(teamARR)))//Note, make more modular if have time using promises
                console.log('_______________________________________________________')
                console.log('file should be written')
                return
            }
        })
    
    }

    //Make Manager
    const makeManager = function() {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is the manager name?',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter name');
                  return false;
                }
              }
          },
          {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID?',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter id');
                  return false;
                }
              }
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter email');
                  return false;
                }
              }
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager office number?',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter office number');
                  return false;
                }
              }
          }
        ])
        .then(({name,id,email,officeNumber}) => {
            let manager = new Manager(name,id,email,officeNumber)
            teamARR.push(manager)//push employee to array
            //prompt want to make another employee?
            finishToPage()
        }) 
      };
    
makeManager()
//   .then((data) => {
//     writeFile(data)})