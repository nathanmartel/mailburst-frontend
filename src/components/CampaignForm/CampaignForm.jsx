import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CampaignFormStub from '../CampaignFormStub/CampaignFormStub';
import AddressFormStub from '../AddressFormStub/AddressFormStub';

const CampaignForm = ({ 
  campaignFormStubProps,
  addressFormStubProps,
  onSubmit 
}) => (
  <Form onSubmit={onSubmit}>
    <CampaignFormStub {...campaignFormStubProps} />
    <AddressFormStub {...addressFormStubProps} />
    <Button variant="primary" type="submit">Create Campaign</Button>
  </Form>
);

export default CampaignForm;
