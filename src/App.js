import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './routes/login';
import Dashboard from './routes/dashboard';

import Compo from './routes/compo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Compo}/>
      </Switch>
    </Router>
  );
}

export default App;



{/* <Route path="/dashboard" component={Dashboard}/>
      <Route path="/" component={Login}/> */}