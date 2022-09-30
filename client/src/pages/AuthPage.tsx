import { ChangeEvent, FC, useState } from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { EnumRoutes } from '../router/EnumRoutes';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';

export const AuthPage: FC = observer(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const isLogin = location.pathname === EnumRoutes.LOGIN_ROUTE;
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleClick = async () => {
    if (isLogin) {
      const response = await login(email, password);
      return;
    }
    const response = await registration(email, password);
  };
  return (
    <Container
      style={{ height: window.innerHeight - 54 }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card style={{ width: '600px' }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            value={email}
            onChange={handleEmail}
            className="mt-3"
            placeholder="Email..."
          />
          <Form.Control
            value={password}
            onChange={handlePassword}
            className="mt-3"
            type="password"
            placeholder="Password..."
          />
          <div className="d-flex justify-content-between mt-3 pr-3 pl-3">
            {isLogin ? (
              <div>
                or{' '}
                <NavLink to={EnumRoutes.REGISTRATION_ROUTE}>Register</NavLink>
              </div>
            ) : (
              <div>
                or <NavLink to={EnumRoutes.LOGIN_ROUTE}>Sign In</NavLink>
              </div>
            )}
            <Button onClick={handleClick} variant="outline-success">
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
});
