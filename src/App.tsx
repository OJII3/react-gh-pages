import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import ReactTemplate from './routes/reactTemplate/ReactTemplate';
import Tetris from './routes/home/tetris';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/react' element={<ReactTemplate />} />
        <Route path='/home/tetris' element={<Tetris />} />
      </Routes>
    </div>
  );
}

export default App;
