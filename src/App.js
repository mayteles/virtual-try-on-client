
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Step from './pages/Step/Step';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={< Step />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
