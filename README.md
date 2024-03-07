# Random Password Generator
A robust npm package for generating random passwords in JavaScript. This package ensures strong and secure passwords with customizable length and character sets.

## Installation
To install our-qr-generator, you need to have Node.js installed on your system. Then, you can follow these steps : 

- Navigate to the directory where you want to use the package.
- Initialize npm by running ( in your terminal ) :
  ```javascript
  npm init
  ```
- Install the package by running ( in your terminal ) : 
  ```javascript
  npm install my-strong-password-generator   
  ```
## Usage

After installing the package, you can use it in your Node.js projects by requiring it.Write the below code under your index.js( or as your file name ) file.

```javascript
const generateQR = require('my-strong-password-generator');

generateQR().catch(error => {
    console.error('Error:', error.message);
});
```

Then run the below command ( in your terminal ) :
  ```javascript
  node index.js   
  ```

When you run this code it prompts the user to enter the length of the desired password. It then generates a secure and robust password containing digits, lowercase and uppercase letters, and special symbols as the output.

## License
This package is licensed under the Apache 2.0 License.
