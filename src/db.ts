import User from './components/users/interface';

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

export default db;