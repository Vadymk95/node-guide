import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Context } from '../main';
import { EnumRoutes } from '../router/EnumRoutes';

export const NavBar: FC = observer(() => {
  const { user } = useContext(Context);
  const handleAuth = () => user.setIsAuth(true);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{ color: '#fff', textDecoration: 'none', marginRight: '24px' }}
          to={EnumRoutes.SHOP_ROUTE}
        >
          Buy Device
        </NavLink>
        <Nav className="ml-auto">
          {user.isAuth ? (
            <>
              <Button style={{ marginRight: '10px' }} variant="outline-light">
                Admin Panel
              </Button>
              <Button variant="outline-light">Login</Button>
            </>
          ) : (
            <Button onClick={handleAuth} variant="outline-light">
              Authorization
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
});
