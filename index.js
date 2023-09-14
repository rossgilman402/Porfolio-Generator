const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What do you want to name your title?",
      name: "title",
    },
    {
      type: "input",
      message: "Where are you located?",
      name: "location",
    },
    {
      type: "input",
      message: "What is your linkedin username?",
      name: "linkedin",
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "github",
    },
  ])
  .then((responses) => {
    const htmlText = createText(responses);
    writeFile(htmlText);
  });

function writeFile(objectString) {
  fs.writeFile("index.html", objectString, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

var createText = (responses) => {
  const text = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
        crossorigin="anonymous"
      />
      <title>${responses.title}</title>
    </head>
    <body class="bg-secondary">
      <div class="jumbotron jumbotron-fluid d-flex align-items-center flex-column text-light">
        <h1 class="display-4">${responses.title}</h1>
        <h2 class="display-4">My name is ${responses.name}</h2>
        <p class="lead">I am located in: ${responses.location}</p>
        <hr class="my-4" />
        <p class="lead">
          <a
            class="btn btn-primary btn-lg"
            href="https://www.linkedin.com/in/${responses.linkedin}"
            role="button"
            target="_blank"
            >LinkedIn</a
          >
        </p>
        <p class="lead">
          <a
            class="btn btn-primary btn-lg"
            href="https://www.github.com/${responses.github}"
            role="button"
            target="_blank"
            >Github</a
          >
        </p>
      </div>
    </body>
  </html>
  `;
  return text;
};
