import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import { Header } from './components';
import { HomePage }  from './pages/Home';
import { GamePage } from './pages/Game';
import { OrderPage } from './pages/Order';

import './App.css';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/order" element={<OrderPage /> }/>
            <Route path="/app/:title" element={ <GamePage /> }/>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;