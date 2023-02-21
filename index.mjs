import inquirer from "inquirer";
import fs from "fs/promises";
//Import inquirer and fs (file system)


let {projectTitle,
     projectDescription,
     projectInstallation,
     projectUsage,
     projectLicense,
     projectContribution,
     projectTest,
     projectQuestionsViaGithub,
     projectQuestionsViaEmail,
    } = await inquirer
     .prompt([
         {
             type: 'input',
             name: 'projectTitle',
             message: "What's the name of your project?",
         },
         {
            type: 'input',
            name: 'projectDescription',
            message: "What's a description of your project:",
         },
         {
            type: 'input',
            name: 'projectInstallation',
            message: "Describe how to install and set up the project.",
         },
         {
            type: 'input',
            name: 'projectUsage',
            message: "Provide instructions on how to use the product.",
         },
         {
            type: 'list',
            name: 'projectLicense',
            message: "Choose the appropriate license from the following:",
            choices: ["MIT License", "ISC", "MOZILLA", "Apache License 2.0"],
         },
         {
            type: 'input',
            name: 'projectContribution',
            message: "Explain how to contribute to the project:",
         },
         {
            type: 'input',
            name: 'projectTest',
            message: "Explain how to run any test for the project:",
         },
         {
            type: 'input',
            name: 'projectQuestionsViaGithub',
            message: "Please paste the link to your Github profile:",
         },
         {
            type: 'input',
            name: 'projectQuestionsViaEmail',
            message: "Input your contact email address:",
         },
         /* {
             type: 'list',
             name: 'size',
             message: 'What size do you need?',
             choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
             filter(val) {
                return val.toLoverCase();
             },
            
         }, */
     ])

     let licenseBadge = "";
     switch (projectLicense) {
       case "MIT License":
         licenseBadge =
           "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
         break;
       case "Apache License 2.0":
         licenseBadge =
           "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)";
         break;
       case "ISC":
         licenseBadge =
           "[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
         break;
       case "Mozilla":
         licenseBadge =
           "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
         break;
     }


 let readmeText =

 `# Project Title
 ${projectTitle}

 ## Project Description
 ${projectDescription}

 ## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contribution](#contribution)
 * [Test](#test)
 * [Questions](#Questions)

 ## Installation
 ${projectInstallation}

 ## Usage
 ${projectUsage}

 ## License
 ${projectLicense}

 ## Contribution
 ${projectContribution}

 ## Test
 ${projectTest}

 ## Questions
 Feel free to explore my Github profile further at ${projectQuestionsViaGithub}.
 My email address is ${projectQuestionsViaEmail}, feel free to contact me with any questions you may have!

 ####



 ${generateLicence(size)}
 `


 await fs.writeFile('README.md', readmeText);
    
/* 
    fs.writeFile("README.md",readmeText )
    
    function generateLicence(license){

        if(license === "MIT"){

            return "[![License]()"
        }


 */
   /*  } */