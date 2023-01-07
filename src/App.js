import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bag from './pages/bag/Bag';
import Home from './pages/home/Home';
import ItemView from './pages/item-view/ItemView';
import Notfound from './pages/notfound/Notfound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/itemview/:id' element={<ItemView />} />
        <Route path='/bag' element={<Bag />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>

  );
}

export default App;
