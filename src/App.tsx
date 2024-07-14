import { Route, Routes } from 'react-router-dom';
import './App.css';
import Music from './components/Music';
import LayoutWebsite from './layout/LayoutWebsite';
import Detail from './page/Detail';
import Home from './page/Home';
import LayoutAdmin from './layout/LayoutAdmin';
import NFTList from './components/Admin/NFT/List';
import NFTAdd from './components/Admin/NFT/Add';
import CollectionList from './components/Admin/Collection/List';
import CollectionAdd from './components/Admin/Collection/Add';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LayoutWebsite />}>
        <Route index element={<Home/>} />
        <Route path='music' element={<Music />} />
        <Route path='detail' element={<Detail/>} />
      </Route>

      <Route path='/admin' element={<LayoutAdmin />}>
          <Route path='nft' element={<NFTList />} />
          <Route path='nft/add' element={<NFTAdd />} />
          <Route path='collection' element={<CollectionList />} />
          <Route path='collection/add' element={<CollectionAdd />} />
      </Route>
    </Routes>
      
    </>
  )
}

export default App
