import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import styles from './public/stylesheets/App.module.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
