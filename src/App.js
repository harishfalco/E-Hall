import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
import './App.css';
import Places from './components/Homepage/Places'
import Login from'./components/Login'
import Register from './components/Register'
import HallDetails from './components/Halls/HallDetails'
import Navbar from './components/Homepage/Navbar'
import IndividualHall from './components/Halls/IndividualHall'
import ImageShow from './components/Homepage/ImageShow'
import HomePage from './components/Homepage/HomePage'
import Footer from './components/Homepage/Footer'
import PaymentForm from './components/Halls/PaymentForm'
function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
      <Route exact  path="/" component={HomePage}  />
        <Route exact  path="/Login" component={Login}  />
        <Route exact  path="/reg" component={Register}  />
        <Route exact  path="/places" component={Places}  />
        <Route exact  path="/halls" component={HallDetails}  />
        <Route exact  path="/onehall" component={IndividualHall}  />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
