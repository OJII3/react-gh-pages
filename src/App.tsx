import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Error404 from './routes/home/404';
import SearchResult from './routes/home/searchResult';
import Pages from './Pages';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home/search' element={<SearchResult />} />
        <Route path='*' element={<Error404 />} />
        {Pages.map(x => <Route path={x.path} element={x.content()} />).concat()}
      </Routes>
    </div>
  );
}

export default App;
