import { FC } from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { EnumRoutes } from '../router/EnumRoutes';

export const AuthPage: FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === EnumRoutes.LOGIN_ROUTE;
  return (
    <Container
      style={{ height: window.innerHeight - 54 }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card style={{ width: '600px' }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Email..." />
          <Form.Control className="mt-3" placeholder="Password..." />
          <div className="d-flex justify-content-between mt-3 pr-3 pl-3">
            {isLogin ? (
              <div>
                or <NavLink to={EnumRoutes.REGISTRATION_ROUTE}>Register</NavLink>
              </div>
            ) : (
              <div>
                or <NavLink to={EnumRoutes.LOGIN_ROUTE}>Sign In</NavLink>
              </div>
            )}
            <Button variant="outline-success">
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};
