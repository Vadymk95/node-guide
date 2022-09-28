import { FC } from 'react';
import { NavBar } from './components';
import { AppRouter } from './router';

const App: FC = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
};

export default App;
