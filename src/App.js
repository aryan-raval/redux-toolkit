
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUSer from './components/AddUser';
import DisplayUser from './components/DisplayUser';
import NewDisplay from './NewComponent/NewDisplay';
import List from './todolist/List';
import ApiList from './apiData/ApiList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><AddUSer/><DisplayUser/></>} />
        <Route path='/newcomp' element={<NewDisplay/>} />
        <Route path='/todolist' element={<List/>} />
        <Route path='/apilist' element={<ApiList/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
