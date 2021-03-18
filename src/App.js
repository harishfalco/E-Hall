import {BrowserRouter as Router , Route ,Switch , Link} from 'react-router-dom'
import './App.css';
import Navbar from './components/Homepage/Navbar'
import Login from'./components/Login'
import Register from './components/Register'
function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" component={Login} exact  />
        <Route path="/reg" component={Register}  />
        <Route path="/navbar" component={Navbar}  />
      </Switch>
    </Router>

  );
}

export default App;
