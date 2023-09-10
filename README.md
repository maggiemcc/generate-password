# Password Generator

## Table of Contents
- [Description](#description)
- [Link](#link)
- [Screenshot](#screenshot)

## Description
This project was created to help employees, with access to sensitive data, create a randomly generated password that will provide greater security.

## Link
[Click to view my deployed portfolio GitHub Page](https://maggiemcc.github.io/generate-password/)

## Screenshot
![](./resources/screenshot.png)


GIVEN I need a new, secure password:
- [ ] WHEN I click the button to generate a password: THEN I am presented with a series of prompts for password criteria
- [ ] WHEN prompted for password criteria: THEN I select which criteria to include in the password
- [x] WHEN prompted for the length of the password: THEN I choose a length of at least 8 characters and no more than 128 characters
- [ ] WHEN asked for character types to include in the password: THEN I confirm whether or not to include:
- [x]lowercase
- [x]uppercase
- [x]numeric
- [x]special characters
- [x] WHEN I answer each prompt: THEN my input should be validated and at least one character type should be selected
- [x] WHEN all prompts are answered: THEN a password is generated that matches the selected criteria
- [ ] WHEN the password is generated: THEN the password is either displayed in an alert or written to the page