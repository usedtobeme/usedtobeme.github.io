import { lightTokens } from '@ui/tokens.css';
import { Outlet } from 'react-router';
import { app } from '../App.css';
import Background3D from '../components/Background3D';
import { Header } from '../components/Header/Header';
import { ConfettiEasterEgg } from '../components/WebGLConfetti';
import { mainWrapper } from './Main.css';

export const Main = () => {
  return (
    <div className={`${lightTokens} ${app}`}>
      <Background3D />
      <Header />
      <main className={`${mainWrapper}`}>
        <Outlet />
      </main>
      <ConfettiEasterEgg />
    </div>
  );
};
