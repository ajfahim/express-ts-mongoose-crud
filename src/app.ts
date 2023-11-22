import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { usersRoutes } from './modules/users/users.routes';

const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/users', usersRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
