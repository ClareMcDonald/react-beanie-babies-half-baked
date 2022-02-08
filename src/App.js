import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';

export default function App() {
  return (
    <Router>
      <div className='App'>
        {/* <ul>
          <li>
            <Link to="/">Beanies Page</Link>
          </li>
          <li>
            <Link to="beanie-baby">Beanie Detail</Link>
          </li>
        </ul> */}
        <Switch>
          <Route exact path="/">
            <BeaniesPage />
            {/* this home page route should list all the beanies */}
          </Route>
          <Route exact path="/beanie-baby/:id"> 
            {/* this route should point to a particulat beanie baby by id and render that specific BeanieDetail page */}
            <BeanieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}