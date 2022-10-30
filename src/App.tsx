import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import ReactTemplate from './routes/reactTemplate/ReactTemplate';
import Tetris from './routes/home/tetris';
import Breakout2d from './routes/home/breakout2d';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/react' element={<ReactTemplate />} />
        <Route path='/home/tetris' element={<Tetris />} />
        <Route path='/home/breakout2d' element={<Breakout2d />} />
      </Routes>
    </div>
  );
}

export default App;
