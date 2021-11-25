import { User } from './components/users/interfaces';

/**
 * Database interface
 */
interface Db {
  users: User[];
}

/**
 * Mock database
 */
const db: Db = {
  users: [
    {
      id: 1,
      firstName: 'Juku',
      lastName: 'Juurikas',
      email: 'juku@juurikas.ee',
      password: '$2b$10$nevnzRS0jBjFh.KEYSoQ6u75M7FdLA7vXEgbbV9iHfU7W/.6W9hFa',
      role: 'Admin',
    },
    {
      id: 2,
      firstName: 'Mari',
      lastName: 'Maasikas',
      email: 'mari@maasikas.ee',
      password: '$2b$10$FY6sDSftFysyuOVqIpgc..qr./DoTxFCUUZALvqXUF98nz8/wlNeO',
      role: 'User',
    },
  ],
};

export default db;