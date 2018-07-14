# Node Express & MongoDB Server built with Typescript :floppy_disk:


## Idea

There are a lot of advantages using typescript to build Javascript code:

- Optional static typing (the key here is optional)
- Type Inference, which gives some of the benefits of types, without actually using them
- Access to ES6 and ES7 features, before they become supported by major browsers
- The ability to compile down to a version of JavaScript that runs on all browsers
- Great tooling support with IntelliSense

This is a simple example of a Node Server using typescript. 
The idea its a basic CRM to manage contacts.

## Structure:

:arrow_right: tsconfig.json: Typescript global guidelines

:arrow_right: server.ts & lib.app.ts: Server configuration

:arrow_right: : models/crmModel.ts: Mongoose Schema of Contacts

:arrow_right: : controllers/crmController.ts: CRUD operations logic

:arrow_right: : controllers/crmRoutes.ts: CRUD routes of the server. For demo purposes, we have used a key to show an example of how to secure the different routes. All requests need to have the "secret" key passed.

## How to run

You need a MongoDB Server running local or globally. 
Define the database and mongo url in the in the lib.app.ts file.
Then:

```
npm install
npm run dev
```

You have aditionals scripts defined to use in package.json






