import './App.css';
import {Routes, Route} from 'react-router-dom'
import ParentApp from './component/ParentApp';
import HealthApp from './component/HealthApp';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ParentApp/>} />
        <Route path='/Health' element={<HealthApp />} />
      </Routes>
   
    </div>
  );
}

export default App;
