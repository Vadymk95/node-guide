import { FC, useContext } from 'react';
import { Context } from '../main';

export const Navbar: FC = () => {
  const { user } = useContext(Context);
  return <div>Navbar</div>;
};
