import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import MainNav from '../MainNav/MainNav';
import Home from '../../screens/Home/Home';
import ScreensCampaignCreate from '../../screens/Campaign/Create/Create';
import ScreensSignup from '../../screens/Signup/Signup';
import ScreensLogin from '../../screens/Login/Login';
import ScreensPostcardCreate from '../../screens/Postcard/Create';
import ScreensCampaignView from '../../screens/Campaign/View/View';
import ScreensCampaignViewAll from '../../screens/Campaign/ViewAll/ViewAll';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <MainNav />
      <Switch>
        <Route exact path='/createCampaign' component={ScreensCampaignCreate} />
        <Route exact path='/viewCampaign/' component={ScreensCampaignViewAll} />
        <Route exact path='/viewCampaign/:campaignId' component={ScreensCampaignView} />
        <Route exact path='/viewCampaign/:campaignId/createPostcard' component={ScreensPostcardCreate} />
        <Route exact path='/createPostcard' component={ScreensPostcardCreate} />
        <Route exact path='/login' component={ScreensLogin} />
        <Route exact path='/signup' component={ScreensSignup} />
        <Route exact path='/' component={Home} />
      </Switch>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
