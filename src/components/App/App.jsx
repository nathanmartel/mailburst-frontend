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
import ScreensCampaignViewAll from 'screens/Campaign/ViewAll/ViewAll';
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
          <Route exact path='/createCampaign' component={ScreensCampaignCreate} />
          <Route exact path='/viewCampaign' component={ScreensCampaignViewAll} />
          <Route exact path='/viewCampaign/:campaignId' component={ScreensCampaignView} />
          <Route exact path='/viewCampaign/:campaignId/createPostcard' component={ScreensPostcardCreate} />
          <Route exact path='/createPostcard' component={ScreensPostcardCreate} />
          <Route exact path='/viewPostcard/:postcardId' component={ScreensPostcardView} />
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
