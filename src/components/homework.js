import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Weekcontents from './weekContents';
import Daycontents from './dayContents';
class Homework extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                    <li>
                        <Link to="/day">일일 컨텐츠</Link>
                    </li>
                    <li>
                        <Link to="/week">주간 컨텐츠</Link>
                    </li>
                    </ul>
                    <Switch>
                    <Route path="/week">
                        <Weekcontents/>
                    </Route>
                    <Route path="/day">
                        <Daycontents/>
                    </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Homework;