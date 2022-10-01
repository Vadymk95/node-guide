import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../main';
import { EnumRoutes } from '../router/EnumRoutes';

export const NavBar: FC = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const handleAuth = () => navigate(EnumRoutes.LOGIN_ROUTE);
  const handleAdminRoute = () => navigate(EnumRoutes.ADMIN_ROUTE);
  const handleLogout = () => {
    navigate(EnumRoutes.LOGIN_ROUTE);
    user.setIsAuth(false);
    user.setUser({});
  };

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
              <Button
                onClick={handleAdminRoute}
                style={{ marginRight: '10px' }}
                variant="outline-light"
              >
                Admin Panel
              </Button>
              <Button onClick={handleLogout} variant="outline-light">
                Log out
              </Button>
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
