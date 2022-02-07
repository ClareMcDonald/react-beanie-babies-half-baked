import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to="/beanie-babies">Beanies Page</Link>
          </li>
          <li>
            <Link to="beanie-baby">Beanie Detail</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/beanie-babies">
            <BeaniesPage />
            {/* this home page route should list all the beanies */}
          </Route>
          <Route paht="/beanie-baby"> 
            {/* this route should point to a particulat beanie baby by id and render that specific BeanieDetail page */}
            <BeanieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}