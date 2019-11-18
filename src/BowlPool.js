import React from 'react';
import {Switch,  Route, Link} from "react-router-dom";
import './BowlPool.css';

import AllPicksScreen from './AllPicksScreen';
import SelectionScreen from './SelectionScreen';

function App() {
  return (
    <div className="BowlPool">
      <Switch>
        <Route path="/" exact>
          <SelectionScreen />
        </Route>
        <Route path="/picks">
          <AllPicksScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
