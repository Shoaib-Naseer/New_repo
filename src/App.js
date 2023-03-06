import './App.css';
import AllBooks from './components/AllBooks';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const img_url =
  'https://www.realsimple.com/thmb/m1YY-PipA4UpKqtRTacPaJ1IA7g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/great-books-for-anytime-2000-4ff4221eb1e54b659689fef7d5e265d5.jpg';

const books = [{ id: 1, title: 'random', author: 'shoaib', image: img_url },{ id: 2, title: 'Shoaib', author: 'shoaib', image: img_url },{ id: 3, title: 'Shoaib', author: 'shoaib', image: img_url },{ id: 2, title: 'Shoaib', author: 'shoaib', image: img_url },{ id: 3, title: 'Shoaib', author: 'shoaib', image: img_url } ];

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllBooks books={books} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
