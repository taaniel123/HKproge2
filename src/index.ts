/**
 * Import express framework
 */
 
 import express, { Application } from 'express';
 import './database';
 /**
 
 /**
  * Import controllers
  */
 import usersController from './components/users/controller';
 import authController from './components/auth/controller';

 
 /**
  * Import middlewares
  */
 import logger from '././components/loggerMiddleware';
 import isLoggedIn from '././components/auth/isLoggedInMiddleware';
 import isAdmin from '././components/auth/isAdminMiddleware';
  
 /**
  * Create express app
  */
 const app: Application = express();
 
 /**
  * Middleware for creating request body object
  */
 app.use(express.json());
 
 
 app.use(logger);

 
 /**
  * Port number for express app
  */
 // const port = 3000;
 
 /**
  * API test endpoint
  */
 
 /**
  * *********************** Endpoints without loggedIn middleware ******************
  */
 app.post('/login', authController.login);
 app.post('/users', usersController.createUser);
 
 app.use(isLoggedIn);
 
 /**
  * *********************** Users ******************
  */
 app.get('/users', isAdmin, usersController.getAllUsers);
 app.get('/users/:id', usersController.getUserById);
 app.delete('/users/:id', usersController.removeUser);
 app.patch('/users/:id', usersController.updateUser);
 
 /**
 
 /**
  * Start listening
  */
 app.listen(3000, () => {
   // eslint-disable-next-line no-console
   console.log('Server is running on port: 3000');
 });