import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import EachUser from './components/EachUser';
import Login from './components/Login';
import NavLinks from './components/NavLinks';
//import WithRouter from './components/UserInfo';
import './App.css';
import React from 'react';

function App(props) {

  //console.log(props);
  return (
      <Router>
            <div className="App">
                <NavLinks />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/users" component={Users} />
                    <Route path="/users/:type" component={EachUser} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
      
  );
}

export default App;
