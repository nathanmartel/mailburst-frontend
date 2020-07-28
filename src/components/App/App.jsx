import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScreensCampaignCreate from '../../screens/Campaign/Create/Create';
import MainNav from '../MainNav/MainNav';
import Home from '../../screens/Home/Home';
import ScreensSignup from '../../screens/Signup/Signup';

const App = () => (
  <BrowserRouter>
    <MainNav />
    <Switch>
      <Route exact path='/createCampaign' component={ScreensCampaignCreate} />
      <Route exact path='/signup' component={ScreensSignup} />
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
