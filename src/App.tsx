import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/homepage/Home';
import ReactApp from './routes/homepage/ReactApp';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/homepage/Home' element={<Home />} />
        <Route path='/react' element={<ReactApp />} />
      </Routes>
    </div>
  );
}

export default App;
