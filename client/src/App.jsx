import { Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './components/Landing.jsx';
import HomePage from './components/Home_page';
import Detail from './components/Detail';
import SaveActivities from './components/SaveActivities';

function App() {

  return (
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/homePage/Countries' element={<HomePage />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/saveActivities' element={<SaveActivities />}></Route>
      </Routes>
  )
}

export default App
