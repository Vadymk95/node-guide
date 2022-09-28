import { useContext } from 'react';
import { useRoutes } from 'react-router-dom';
import { Context } from '../main';
import { protectedRoutes, publicRoutes } from './routes';

export const AppRouter = () => {
  const { user } = useContext(Context);
  const routes = user.isAuth ? protectedRoutes : publicRoutes;
  const router = useRoutes(routes);
  return router;
};
