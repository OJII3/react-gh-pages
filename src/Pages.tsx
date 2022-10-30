import Breakout2d from './routes/home/breakout2d';
import Home from './routes/home/home';
import Tetris from './routes/home/tetris';
import ReactTemplate from './routes/reactTemplate/ReactTemplate';

interface page {
  path: string,
  content: () => JSX.Element
}

const Pages: page[] = [
  { path: '/home', content: Home },
  { path: '/home/tetris', content: Tetris },
  { path: '/home/breakout2d', content: Breakout2d },
  { path: '/react', content: ReactTemplate }
];

export default Pages;