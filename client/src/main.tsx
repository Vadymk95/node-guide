import { createContext, ProviderProps } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { DeviceStore, UserStore } from './store';

const value = {
  user: new UserStore(),
  device: new DeviceStore(),
};
export const Context = createContext(value);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Context.Provider value={value}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);
