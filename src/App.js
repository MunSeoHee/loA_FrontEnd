import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './routes/login';
import Dashboard from './routes/dashboard';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;


