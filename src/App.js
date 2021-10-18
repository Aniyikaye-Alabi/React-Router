import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

//const user_ids = ['userId1', 'userId2', 'userId3', 'userId4', 'userId5', 'userId6', 'userId7'];

function App() {
    
  const style = {
    textDecoration: 'none'
  }
  return (
      <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link style={style} to="/">Home</Link>
                    </li>

                    <li>
                        <Link style={style} to="/about">About Us</Link>
                    </li>

                    <li>
                        <Link style={style} to="/users">Users</Link>
                    </li>
                    {/* {
                        user_ids.map((user) => 
                            <li>
                                <Link style={style} to={'/users/' + user}>{user}</Link>
                            </li>
                        )
                    } */}
                </ul>



                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route exact path="/users">
                        <Users />
                    </Route>
                    <Route path="/users/:type">
                        <Users />
                    </Route>
                </Switch>
            </div>
        </Router>
      
  );
}

export default App;
