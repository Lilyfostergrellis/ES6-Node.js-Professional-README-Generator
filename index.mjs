import inquirer from "inquirer";
//Import inquirer and fs (file system)

import fs from "fs/promises";


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
            type: 'input',
            name: 'projectLicense',
            message: "What's a description of your project:",
         },
         {
            type: 'input',
            name: 'projectContribution',
            message: "What's a description of your project:",
         },
         {
            type: 'input',
            name: 'projectTest',
            message: "What's a description of your project:",
         },
         {
            type: 'input',
            name: 'projectQuestionsViaGithub',
            message: "What's a description of your project:",
         },
         {
            type: 'input',
            name: 'projectQuestionsViaEmail',
            message: "What's a description of your project:",
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


 let readmeText =

 `# Project Title
 ${projectTitle}

 ## Project Description
 ${projectDescription}

 ## Table of Contents
 * [Installation](#Installation)
 * [Usage](#projectUsage)
 * [License](#project)
 * []()
 * []()
 * []()

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
 ${projectQuestionsViaGithub}
 ${projectQuestionsViaEmail}

 ####



 ${generateLicence(size)}
 `


 await fs.writeFile('README.md', readmeText);
    

    fs.writeFile("README.md",readmeText )
    
    function generateLicence(license){

        if(license === "Jumbo"){

            return "[![License]()"
        }



    }