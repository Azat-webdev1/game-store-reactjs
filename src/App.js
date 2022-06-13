import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import { Header } from './components';
import { HomePage }  from './pages/home';
import { GamePage } from './pages/game';
import { OrderPage } from './pages/order';

import './App.css';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route
              path="/order"
              element={<OrderPage />}
            />
            <Route
              path="/app/:title"
              element={<GamePage />}
            />
            <Route
              path="/"
              element={<HomePage />}
              />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;