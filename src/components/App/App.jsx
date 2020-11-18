import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import MainNav from 'components/MainNav/MainNav';
import Home from 'screens/Home/Home';
import ScreensCampaignCreate from 'screens/Campaign/Create/Create';
import ScreensSignup from 'screens/Signup/Signup';
import ScreensLogin from 'screens/Login/Login';
import ScreensPostcardCreate from 'screens/Postcard/Create';
import ScreensCampaignView from 'screens/Campaign/View/View';
import ScreensPostcardView from 'screens/Postcard/View/View';
import ScreensMyAccount from 'screens/MyAccount/MyAccount';
import ScreensDashboard from 'screens/Dashboard/Dashboard';
import AccountLogout from 'components/Account/Logout/Logout';
import ScreensAdmin from 'screens/Admin/Admin';


const AuthRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  if (!authContext.authState._id) {
    return <Redirect to='/login' />;
  }
  return children;
};


const App = () => {

  return (
    <BrowserRouter>
      <MainNav />
      <Switch>
        <Route exact path='/login' component={ScreensLogin} />
        <Route exact path='/signup' component={ScreensSignup} />
        <Route exact path='/' component={Home} />
        <AuthRoute exact path='/campaign/create'>
          <Route component={ScreensCampaignCreate} />
        </AuthRoute> 
        <AuthRoute exact path='/campaign/:campaignId'>
          <Route component={ScreensCampaignView} />
        </AuthRoute>
        <AuthRoute exact path='/campaign/:campaignId/createPostcard'>
          <Route component={ScreensPostcardCreate} />
        </AuthRoute>
        <AuthRoute exact path='/postcard/create'>
          <Route component={ScreensPostcardCreate} />
        </AuthRoute>
        <AuthRoute exact path='/postcard/:postcardId'>
          <Route component={ScreensPostcardView} />
        </AuthRoute>
        <AuthRoute exact path='/account'>
          <Route component={ScreensMyAccount} />
        </AuthRoute>
        <AuthRoute exact path='/dashboard'>
          <Route component={ScreensDashboard} />
        </AuthRoute> 
        <AuthRoute exact path='/logout'>
          <Route component={AccountLogout} />
        </AuthRoute>
        <AuthRoute exact path='/admin'>
          <Route component={ScreensAdmin} />
        </AuthRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
