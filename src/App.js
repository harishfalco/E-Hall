import {BrowserRouter as Router , Route ,Switch , Link} from 'react-router-dom'
import './App.css';
import Places from './components/Homepage/Places'
import Login from'./components/Login'
import Register from './components/Register'
import HallDetails from './components/Halls/HallDetails'
function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" component={Login} exact  />
        <Route path="/reg" component={Register}  />
        <Route path="/places" component={Places}  />
        <Route path="/halls" component={HallDetails}  />
      </Switch>
    </Router>

  );
}

export default App;
