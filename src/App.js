import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/aboutMe' />
            <Route path='/education' />
            <Route path='/experience' />
            <Route path='/skills' />
            <Route path='/interests' />
            <Route path='/funFacts' />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
