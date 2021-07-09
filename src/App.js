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
import React ,{useState , useContext} from 'react'
import {Context} from './Context'
import PostHall from './components/Halls/PostHall'
function App() {
   const [isloggedin, setIsloggedin] = useState(true)
  return (
    <Router>
      {/* {
        isloggedin ?
        <Login setIsloggedin = {setIsloggedin} />:
        <div setIsloggedin = {setIsloggedin}> */}
            <Navbar setIsloggedin = {setIsloggedin} />
            <Switch>
                <Route exact  path="/login"  component={Login}  /> 
                <Route exact  path="/" component={HomePage}  />
                 <Route exact  path="/reg" component={Register}  />
                <Route exact  path="/places" component={Places}  />
                <Route exact  path="/halls" component={HallDetails}  />
                <Route exact  path="/onehall" component={IndividualHall}  />
                <Route exact  path="/posthall" component={PostHall}  />
          </Switch>
          <Footer />
      {/* </div>
      } */}
     
    </Router>

  );
}

export default App;
