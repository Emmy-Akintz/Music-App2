import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MusicSearch from './pages/MusicSearch';
import Radio from './pages/Radio';
import Playlist from './pages/Playlist';
import Account from './pages/Account';
import PlayBar from './components/PlayBar';

function App() {
  return (
    <div className="App bg-gray-800 text-white h-[auto]">
      <Routes>
        <Route path = '/home' element={<Home />} />
        <Route path = '/ms' element={<MusicSearch />} />
        <Route path = '/radio' element={<Radio />} />
        <Route path = '/playlist' element={<Playlist />} />
        <Route path = '/' element={<Account />} />
      </Routes>
      <PlayBar />
    </div>
  );
}

export default App;
