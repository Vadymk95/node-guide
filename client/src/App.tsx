import { FC, useContext, useEffect, useState } from 'react';
import { NavBar } from './components';
import { AppRouter } from './router';
import { observer } from 'mobx-react-lite';
import { Context } from './main';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App: FC = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation="grow"/>
  }

  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
});

export default App;
