import express, { Request, Response, Application } from 'express';

const app: Application = express();
const port: number = 3000;
app.use(express.json());


interface User {
    id: number;
    firstName: string;
    lastName: string;
};


interface Db {
    users: User[];
};
  

const db: Db = { 
    users: [
    {
      id: 1,
      firstName: 'Taaniel',
      lastName: 'Typescript',
    },
    {
      id: 2,
      firstName: 'Peeter',
      lastName: 'Python',
    }
  ]
};


app.get('/api', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello world!',
    });
});


app.get('/users', (req: Request, res: Response) => {
    res.status(200).json({
        users: db.users,
    });
});


app.get('/users/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const user = db.users.find((element) => element.id === id);
    res.status(200).json({
      user,
    });
});


app.post('/users', (req: Request, res: Response) => {
    const { firstName, lastName } = req.body;
    const id = db.users.length + 1;
    db.users.push({
        id,
        firstName,
        lastName,
    });
    res.status(201).json({
        id,
        users: db.users,
    });
});


app.delete('/users/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({
        error: 'No valid id provided',
      });
    }
    const index = db.users.findIndex((element) => element.id === id);
    if (index < 0) {
      return res.status(400).json({
        message: `User not found with id: ${id}`,
      });
    }
    db.users.splice(index, 1);
    return res.status(204).send();
});


app.patch('/users/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const { firstName, lastName } = req.body;
    if (!id) {
      return res.status(400).json({
        error: 'No valid id provided',
      });
    }
    if (!firstName && !lastName) {
      return res.status(400).json({
        error: 'Nothing to update',
      });
    }
    const index = db.users.findIndex((element) => element.id === id);
    if (index < 0) {
      return res.status(400).json({
        error: `No user found with id: ${id}`,
      });
    }
    if (firstName) {
      db.users[index].firstName = firstName;
    }
    if (lastName) {
      db.users[index].lastName = lastName;
    }
    return res.status(204).send();
});

  
app.listen(port, () => {
    console.log('Server jookseb');
});