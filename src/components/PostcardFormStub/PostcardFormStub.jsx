import React from 'react';
import { Form } from 'react-bootstrap';

// Come back and merge this with Formik version
const PostcardFormStub = ({
  frontImageFile,
  frontImage,
  frontMessage,
  backMessage,
  senderName,
  senderTitle,
  onFrontImageFileChange,
  onFrontImageChange,
  onFrontMessageChange,
  onBackMessageChange,
  onSenderNameChange,
  onSenderTitleChange,
}) => (
  <>
    <Form.Group controlId="formGridFrontImageFile">
      <Form.File 
        id="frontImageFile" 
        label="Upload file" 
        value={frontImageFile} 
        onChange={onFrontImageFileChange} 
      />
    </Form.Group>

    <Form.Group controlId="formGridFrontImage">
      <Form.Label>Front Message</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Enter URL for postcard's image" 
        value={frontImage} 
        onChange={onFrontImageChange} 
      />
    </Form.Group>

    <Form.Group controlId="formGridFrontMessage">
      <Form.Label>Front Message</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Enter message on the front" 
        value={frontMessage} 
        onChange={onFrontMessageChange} 
      />
    </Form.Group>

    <Form.Group controlId="formGridBackMessage">
      <Form.Label>Back Message</Form.Label>
      <Form.Control 
        as="textarea" 
        rows="4" 
        value={backMessage} 
        onChange={onBackMessageChange} 
      />
    </Form.Group>

    <Form.Group controlId="formGridSenderName">
      <Form.Label>Sender Name</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Enter sender's name" 
        value={senderName} 
        onChange={onSenderNameChange} 
      />
    </Form.Group>

    <Form.Group controlId="formGridSenderTitle">
      <Form.Label>Sender Title</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Enter sender's title (optional)" 
        value={senderTitle} 
        onChange={onSenderTitleChange} 
      />
    </Form.Group>
  </>
);

export default PostcardFormStub;
