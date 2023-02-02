import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hobbies from './components/Hobbies';
import InterestsDefault from './components/InterestsDefault';
import Movies from './components/Movies';
import Navigation from './components/Navigation';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Experience from './pages/Experience';
import HomePage from './pages/HomePage';
import Interests from './pages/Interests';
import NotFound from './pages/NotFound';
import Skills from './pages/Skills';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/aboutMe' element={<AboutMe />} />
            <Route path='/education' element={<Education />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/interests' element={<Interests />}>
            <Route index element={<InterestsDefault />} />
            <Route path='/interests/movies' element={<Movies />} />
            <Route path='/interests/hobbies' element={<Hobbies />} />
            </Route>
            <Route path='/funFacts' />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
