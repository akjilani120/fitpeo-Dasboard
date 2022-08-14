
import { Route, Routes } from 'react-router-dom';
import Dhashboard from './Dashboard/Dhashboard';
import Ecomencee from './Dashboard/Ecomencee';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dhashboard/>}>
          <Route index element={<Ecomencee/>} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
