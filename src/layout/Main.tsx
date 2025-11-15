import { Outlet } from 'react-router';
import { app } from '../App.css';
import Background3D from '../components/Background3D';
import { Header } from '../components/Header/Header';
import { lightTheme } from '../styles/theme.css';

export const Main = () => {
  return (
    <div className={`${lightTheme} ${app}`}>
      <Background3D />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
