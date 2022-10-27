import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Home from './routes/homepage/Home';
import ReactApp from './routes/reactTemplate/ReactTemplate';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/homepage/home' element={<Home />} />
        <Route path='/react' element={<ReactApp />} />
      </Routes>
    </div>
  );
}

export default App;
