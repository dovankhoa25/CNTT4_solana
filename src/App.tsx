import { Route, Routes } from 'react-router-dom';
import './App.css';
import Music from './components/Music';
import LayoutWebsite from './layout/LayoutWebsite';
import Detail from './page/Detail';
import Home from './page/Home';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LayoutWebsite />}>
        <Route index element={<Home/>} />
        <Route path='music' element={<Music />} />
        <Route path='detail' element={<Detail/>} />
      </Route>
    </Routes>
      
    </>
  )
}

export default App
