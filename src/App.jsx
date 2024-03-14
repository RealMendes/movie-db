import { Header } from './components/Header'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Home } from './view/Home';
import { About } from './view/About';
import { MovieDetail } from './view/MovieDetail';


function App() {

return (
  <div className='App'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  </div>
);
}

export default App
