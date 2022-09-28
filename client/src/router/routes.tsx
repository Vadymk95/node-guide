import { ReactNode } from 'react';
import { EnumRoutes } from './EnumRoutes';
import {
  AdminPage,
  BasketPage,
  ShopPage,
  AuthPage,
  DevicePage,
  ErrorPage,
} from '../pages';
import { Navigate } from 'react-router-dom';

type RouteType = {
  path: string;
  element: ReactNode;
};

export const protectedRoutes: RouteType[] = [
  {
    path: EnumRoutes.ADMIN_ROUTE,
    element: <AdminPage />,
  },
  {
    path: EnumRoutes.BASKET_ROUTE,
    element: <BasketPage />,
  },
  {
    path: EnumRoutes.ERROR_ROUTE,
    element: <ErrorPage />,
  },
];

export const publicRoutes: RouteType[] = [
  {
    path: EnumRoutes.SHOP_ROUTE,
    element: <ShopPage />,
  },
  {
    path: EnumRoutes.LOGIN_ROUTE,
    element: <AuthPage />,
  },
  {
    path: EnumRoutes.REGISTRATION_ROUTE,
    element: <AuthPage />,
  },
  {
    path: EnumRoutes.SHOP_ROUTE,
    element: <ShopPage />,
  },
  {
    path: EnumRoutes.DEVICE_ROUTE + '/:id',
    element: <DevicePage />,
  },
  {
    path: EnumRoutes.ERROR_ROUTE,
    element: <Navigate to={EnumRoutes.SHOP_ROUTE} replace />,
  },
];
