import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/aboutMe' element={<AboutMe />} />
            <Route path='/education' element={<Education />} />
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
