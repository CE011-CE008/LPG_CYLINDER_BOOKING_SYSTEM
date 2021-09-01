import logo from './logo.svg';
import './App.css';
import Login from './Login';
import ContactUs from './ContactUs';
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home'
import SignUp from './SignUp';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signUp' component={SignUp}/>
        <Route exact path='/contactUs' component={ContactUs}/>
      </Switch>
    </div>
  );
}

export default App;
