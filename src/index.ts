import express, { Request, Response, Application } from 'express';

const app: Application = express();
const port: number = 3000;
app.use(express.json());

const db = { 
    users: [
    {
      id: 1,
      firstName: 'Taaniel',
      lastName: 'Javascript',
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

app.listen(port, () => {
    console.log('Server jookseb');
});