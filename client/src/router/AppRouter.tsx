import { useRoutes } from 'react-router-dom';
import { protectedRoutes, publicRoutes } from './routes';

export const AppRouter = () => {
  const isAuth = false;
  const routes = isAuth ? protectedRoutes : publicRoutes;
  const router = useRoutes(routes);
  return router;
};
