## Task Management System

This is a Task Management System developed only for testing purposes as an assessment. The APIs included here allow a user to login for authorization, to create, update and delete tasks, and to fetch a list of all tasks or list of tasks based on id, category and assigned to.

## Requirements

This project does not require anything outside Node.JS and Typescript.

## Execution Steps

Following are the steps to setup the project:

- Install Node.JS and Typescript
- Clone the project from the git repository.
- Run the command "npm install" after cloning the repo.
- To run the project, use the following command sequence
  1. npm run build
  2. npm run start
- To perform unit testing, use the following command sequence
  1. npm run build
  2. npm run test

Use the postman collection provided to run and test the APIs as localhost APIs are not publically accessible.

## Assumption

The username and password are assumed in the project. The login request does not take any parameters or body and the username / password used to login are stored in the in-memory db.

The APIs to get lists based on "AssignedTo" and "Category" and present in the same API call.

There is no mock database available to use for this project as in-memory db is used.
