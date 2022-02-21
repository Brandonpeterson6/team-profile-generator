// create teams section
const generateTeam = teamArr => {
    console.log('generateTeam called')
    return `
        <div class="flex-row justify-space-around">
        ${teamArr
          .filter(({ Manager }) => Manager)
          .map(({ name, id, email, officeNumber }) => {
            return `
            <div class="col-md-3 card">
              <div class="card-header">
                <h3><b>Team Manager:</b> ${name}</h3>
              </div>
              <div class="card-body">
                <p> <b>id:</b> ${id} </p>
                <br>
                <p> <b>email:</b> <a href="mailto:${email}">${email}</a> </p>
                <br>
                <p> <b>office number:</b> ${officeNumber}</p>
              </div>
            </div>
          `;
          })
          .join('')}
        ${teamArr
          .filter(({ Engineer }) => Engineer)
          .map(({ name, id, email, github }) => {
            console.log('engineer');
            return `
            <div class="col-md-3 card">
              <div class="card-header">
                <h3><b>Engineer:</b> ${name}</h3>
              </div>
              <div class="card-body">
                <p> <b>id:</b> ${id} </p>
                <br>
                <p> <b>email:</b> <a href="mailto:${email}">${email}</a> </p>
                <br>
                <p> <b>github:</b> <a href="${github}" target="_blank">${github} </a></p>
              </div>
            </div>
          `;
          })
          .join('')}
        ${teamArr
          .filter(({ Intern }) => Intern)
          .map(({ name, id, email, school }) => {
            console.log('intern');
            return `
              <div class="col-md-3 card">
                <div class="card-header">
                  <h3><b>Intern:</b> ${name}</h3>
                </div>
                <div class="card-body">
                  <p> <b>id:</b> ${id} </p>
                  <br>
                  <p> <b>email:</b> <a href="mailto:${email}"> ${email}</a> </p>
                  <br>
                  <p> <b>school:</b> ${school}</p>
                </div>
              </div>
          `;
          })
          .join('')}  
      
        </div>
    `;
  };
  
  // export function to generate entire page
  const generatePage = (templateData) => {
  
    const {projects} = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>TeamProfile</title>
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row">
          <h1 class="page-title">Project Team</h1>
        </div>
      </header>
      <main class="container">
        ${generateTeam(templateData)}
      </main>
    </body>
    </html>
    `;
  };
  
  module.exports = generatePage