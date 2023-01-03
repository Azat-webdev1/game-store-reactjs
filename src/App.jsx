import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import { Header } from './components';
import HomePage from './pages/home/HomePage';
import GamePage from './pages/game/GamePage';
import OrderPage from './pages/order/OrderPage';

import './App.css';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
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