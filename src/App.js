import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="main">
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>

  );
}

export default App;
