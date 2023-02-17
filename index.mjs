import inquirer from "inquirer";

let response = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What's your first name?",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What's your last name?",
            default() {
                return 'Doe';
            },
        },

        //pass your questions in here
    ])

    console.log(response);