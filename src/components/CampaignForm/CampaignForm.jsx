import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CampaignFormStub from '../CampaignFormStub/CampaignFormStub';
import AddressFormStub from '../AddressFormStub/AddressFormStub';
import PostcardFormStub from '../PostcardFormStub/PostcardFormStub';

const CampaignForm = ({ 
  campaignFormStubProps,
  addressFormStubProps,
  postcardFormStubProps,
  onSubmit 
}) => (
  <Form onSubmit={onSubmit}>
    <h3 className="header">Campaign Info</h3>
    <CampaignFormStub {...campaignFormStubProps} />
    <h3 className="header">Recipient Info</h3>
    <AddressFormStub {...addressFormStubProps} />
    <h3 className="header">Postcard Template</h3>
    <PostcardFormStub {...postcardFormStubProps} />
    <Button variant="primary" type="submit">Create Campaign</Button>
  </Form>
);

export default CampaignForm;
