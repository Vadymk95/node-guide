import { FC } from 'react';
import { AppRouter } from './router';

const App: FC = () => {
  return (
    <div className="app">
      <h1>Hello world!</h1>
      <p>
        <ul>
          <li></li>
        </ul>
      </p>
      <AppRouter />
    </div>
  );
};

export default App;
