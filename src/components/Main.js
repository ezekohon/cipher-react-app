import { Switch, Route } from 'react-router-dom';
import React from 'react';

import UserInput from './UserInput';
import DataBase from './DataBase';
import NotFound from './NotFound';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={UserInput}/>
      <Route path='/db' component={DataBase}/>
      <Route component={NotFound} />
      
    </Switch>
  </main>
)

export default Main;