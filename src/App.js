import './App.css';
import AllBooks from './components/AllBooks';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/allBooks" element={<AllBooks />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/editBook/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
