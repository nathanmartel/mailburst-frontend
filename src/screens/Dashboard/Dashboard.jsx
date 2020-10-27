import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ScreensCampaignViewAll from '../Campaign/ViewAll/ViewAll';
import ScreensPostcardViewAll from '../Postcard/ViewAll/ViewAll';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ScreensDashboard = () => {

  const authContext = useContext(AuthContext);

  return (
    <Container className="p-3">
      <h1 className="header">{authContext.authState.firstName}&rsquo;s Dashboard</h1>
      <ScreensCampaignViewAll userId={authContext.authState._id} />
      <Button href="/createCampaign" size="lg">Create a Campaign</Button>
      <ScreensPostcardViewAll userId={authContext.authState._id} />
      <Button href="/createPostcard" size="lg">Create a Postcard</Button>
    </Container>
  );
};

export default ScreensDashboard;
