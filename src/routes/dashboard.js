import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Homework from '../components/homework';
import Register_character from '../components/register_character';
import Naesil from '../components/naesil';

class Dashboard extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/regiCharac">캐릭터 등록</Link>
          </li>
          <li>
            <Link to="/homework">배력 숙제표</Link>
          </li>
          <li>
            <Link to="/Naesil">내실</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/homework">
            <Homework/>
          </Route>
          <Route path="/Naesil">
            <Naesil/>
          </Route>
          <Route path="/regiCharac">
            <Register_character/>
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default Dashboard;
