# Cypress-My-Library

## The book list on the website
* Voice of War
* How to Be an Antiracist
* The Lord of the Rings
* The Hobbit
* Harry Potter and the Sorcerer's Stone
* Harry Potter and the Chamber of Secrets
* Harry Potter and the Prisoner of Azkaban
* Harry Potter and the Goblet of Fire
* Harry Potter and the Order of the Phoenix
* Harry Potter and the Half-Blood Prince

## Prerequisites
* Install Nodejs latest version and configure **NODE_HOME**
* Stable internet connection

## How to run this project
* Clone the repo
* Enter a book name from the list above in the [information.json](https://github.com/asif-shahriar/Cypress-My-Library/blob/main/cypress/e2e/information.json "information.json") file
* Open cmd in the root folder
* Give following command
```
npm install
```
```
npx cypress run --spec ./cypress/e2e/* --headed --browser=chrome
```
