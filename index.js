const readline = require('readline');

async function generatePassword() {
    try {
        // Function to get user input from the command line
        function getUserInput(question) {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            return new Promise((resolve, reject) => {
                rl.question(question, (answer) => {
                    rl.close();
                    resolve(answer);
                });
            });
        }

        let password = "";
        const lenOfPassword = parseInt(await getUserInput('Enter the Length of Password that you want to Generate : '));
        if (isNaN(lenOfPassword)) {
            throw new Error('Please enter a valid number for the password length.');
        }
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const spcSymbol = "!@#$%^&*()/\\][{}"; // Escaped backslash
        const allChars = upperCase + lowerCase + number + spcSymbol;

        // minimum the 4 length password will be generated
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += spcSymbol[Math.floor(Math.random() * spcSymbol.length)];

        while (lenOfPassword > password.length) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        console.log("The Random Generate Password is: " + password);
        console.log("Password Generated Successfully !");
    } catch (error) {
        console.error('Error in generating Password : ', error.message);
    }
}
// Exporting the function
module.exports = generatePassword;

// for testing that is working properly
// generatePassword();