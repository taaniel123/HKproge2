import express, { Request, Response, Application } from 'express';
import db from './db';
import usersController from './components/users/controller';
import logger from './components/loggerMiddleware';

const app: Application = express();
const port: number = 3000;
app.use(express.json());
app.use(logger);


interface User {
    id: number;
    firstName: string;
    lastName: string;
};


interface Db {
    users: User[];
};
  

app.get('/api', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello world!',
    });
});


app.get('/users', usersController.getAllUsers);


app.get('/users/:id', usersController.getUserById);


app.post('/users', usersController.createUser);


app.delete('/users/:id', usersController.removeUser);


app.patch('/users/:id', usersController.updateUser);

  
app.listen(port, () => {
    console.log('Server jookseb');
});