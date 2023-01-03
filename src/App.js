import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
// import styles from './public/stylesheets/App.module.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/education' />
            <Route path='/experience' />
            <Route path='/skills' />
            <Route path='/interests' />
            <Route path='/funFacts' />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
