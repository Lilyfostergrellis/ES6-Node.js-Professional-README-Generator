import inquirer from "inquirer";
import fs from "fs/promises";


let {description, size} = await inquirer
     .prompt([
         {
             type: 'input',
             name: 'description',
             message: "What's a description of your project:",
         },
         {
             type: 'list',
             name: 'size',
             message: 'What size do you need?',
             choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
             filter(val) {
                return val.toLoverCase();
             },
            
         },
     ])

 let readmeText = `# Project Description
 ${description}

 ## The second largest heading

 ${generateLicence(size)}
 

 ##### The smallest heading
 `

 await fs.writeFile('README.md', readmeData);
    

    fs.writeFile("README.md",readmeText )
    
    function generateLicence(license){

        if(license === "Jumbo"){

            return "[![License]()"
        }



    }