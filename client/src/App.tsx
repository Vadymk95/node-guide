import { FC } from 'react';
import { AppRouter } from './router';

const App: FC = () => {
  return (
    <div className="app">
      <h1>Hello world!</h1>
      <AppRouter />
    </div>
  );
};

export default App;
