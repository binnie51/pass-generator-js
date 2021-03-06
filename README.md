# pass-generator-js
I'm being task to modify JS code for an application that helps users generate a password based on criteria given when they answer to the prompts. The prompts itself are based on the general password criteria which contains 8 to 128 characters, upper or lower case options, digits, and special characters if users preffeered so. The application will able to adapt to various devices.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Screenshots

When users give input other than integers or no onput at all:
![inavlid entry alert](./screenshot/Capture1.PNG)

When users give input number not within 8 to 128:
![too low or high of a value](./screenshot/Capture3.PNG)

Password generated 50 characters based on prompts chosen:
![password generated 50 characters based on prompts I chose](./screenshot/Capture2.PNG)