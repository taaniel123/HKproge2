import { Request, Response } from 'express';
import usersService from './service';


const usersController = {
    getAllUsers: (req: Request, res: Response) => {
        const users = usersService.getAllUsers();
        return res.status(200).json({
        users,
      });
    },
    getUserById: (req: Request, res: Response) => {
      const id: number = parseInt(req.params.id, 10);
      if (!id) {
        return res.status(400).json({
          error: 'No valid id provided',
        });
      }
      const user = usersService.getUserById(id);
      if (!user) {
        return res.status(400).json({
          error: `No user found with id: ${id}`,
        });
      }
      return res.status(200).json({
        user,
      });
    },
    removeUser: (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10);
        if (!id) {
          return res.status(400).json({
            error: 'No valid id provided',
          });
        }
        const user = usersService.getUserById(id);
        if (!user) {
          return res.status(400).json({
            message: `User not found with id: ${id}`,
          });
        }
        usersService.removeUser(id);
        return res.status(204).send();
    },
    updateUser: (req: Request, res: Response) => {
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
        const user = usersService.getUserById(id);
        if (!user) {
          return res.status(400).json({
            error: `No user found with id: ${id}`,
          });
        }
        usersService.updateUser({ id, firstName, lastName });
        return res.status(204).send();
    },
    createUser: (req: Request, res: Response) => {
        const { firstName, lastName } = req.body;
        if (!firstName) {
            return res.status(400).json({
                error: 'First name is required',
        });
        }
        if (!lastName) {
            return res.status(400).json({
                error: 'Last name is required',
        });
        }
        const id = usersService.createUser(firstName, lastName);
        return res.status(201).json({
            id,
        });
  },
  };
  
export default usersController;
  