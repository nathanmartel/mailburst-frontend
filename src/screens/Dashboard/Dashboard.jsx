import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import ScreensCampaignViewAll from 'screens/Campaign/ViewAll/ViewAll';
import ScreensPostcardViewAll from 'screens/Postcard/ViewAll/ViewAll';
import { AuthContext } from 'context/AuthContext';

const ScreensDashboard = () => {

  const authContext = useContext(AuthContext);

  return (
    <Container className="p-3">
      <h1 className="header">{authContext.authState.firstName}&rsquo;s Dashboard</h1>
      <ScreensCampaignViewAll userId={authContext.authState._id} />
      <Button href="/createCampaign" size="lg">Create a Campaign</Button>
      <ScreensPostcardViewAll userId={authContext.authState._id} />
    </Container>
  );
};

export default ScreensDashboard;
