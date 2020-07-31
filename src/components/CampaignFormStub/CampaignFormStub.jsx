import React from 'react';
import { Form } from 'react-bootstrap';

const CampaignFormStub = ({ 
  title,
  description,
  recipient,
  onTitleChange,
  onDescriptionChange,
  onRecipientChange,
}) => (
  <>
    <Form.Group controlId="formGridTitle">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" value={title} onChange={onTitleChange} />
    </Form.Group>

    <Form.Group controlId="formGridDescription">
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="Enter description" value={description} onChange={onDescriptionChange} />
    </Form.Group>

    <Form.Group controlId="formGridRecipient">
      <Form.Label>Recipient Name</Form.Label>
      <Form.Control type="text" placeholder="Enter recipient's name" value={recipient} onChange={onRecipientChange} />
    </Form.Group>

  </>
);

export default CampaignFormStub;
