import React from 'react';
import {Switch,  Route, Link} from "react-router-dom";
import './BowlPool.css';

import AllPicksScreen from './AllPicksScreen';
import SelectionScreen from './SelectionScreen';

function App() {
  return (
    <div className="BowlPool">
      <Switch>
        <Route path="/selection">
          <SelectionScreen />
        </Route>
        <Route path="/" exact>
          <AllPicksScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
