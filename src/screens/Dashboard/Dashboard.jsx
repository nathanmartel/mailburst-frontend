import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ScreensCampaignViewAll from '../Campaign/ViewAll/ViewAll';

const ScreensDashboard = () => (
  <Container className="p-3">
    <h1 className="header">Dashboard</h1>
    <ScreensCampaignViewAll />
    <Button href="/createCampaign" size="lg">Create a Campaign</Button>
    <Button href="/createPostcard" size="lg">Create a Postcard</Button>
  </Container>
);

export default ScreensDashboard;
