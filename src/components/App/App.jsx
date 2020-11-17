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


const App = () => {

  const authContext = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    if (!authContext.authState._id) {
      console.log ('redirecting');
      return <Redirect to='/login' />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <MainNav />
      <Switch>
        <Route exact path='/login' component={ScreensLogin} />
        <Route exact path='/signup' component={ScreensSignup} />
        <Route exact path='/' component={Home} />
        <RequireAuth>
          <Route exact path='/campaign/create' component={ScreensCampaignCreate} />
          <Route exact path='/campaign/:campaignId' component={ScreensCampaignView} />
          <Route exact path='/campaign/:campaignId/createPostcard' component={ScreensPostcardCreate} />
          <Route exact path='/postcard/create' component={ScreensPostcardCreate} />
          <Route exact path='/postcard/:postcardId' component={ScreensPostcardView} />
          <Route exact path='/account' component={ScreensMyAccount} />
          <Route exact path='/dashboard' component={ScreensDashboard} />
          <Route exact path='/logout' component={AccountLogout} />
          <Route exact path='/admin' component={ScreensAdmin} />
        </RequireAuth>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
