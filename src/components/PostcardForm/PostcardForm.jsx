import React from 'react';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';

// Come back to this modular approach...
const PostcardForm = () => (
  <Formik
    initialValues={{
      frontImageFile: '',
      frontImage: '',
      frontMessage: '',
      backMessage: '',
      senderName: '',
      senderTitle: '',
    }}
    onSubmit={console.log}
  >
    {({ values, errors, touched, handleChange, handleBlur }) => (
      <Form>
        <Form.Group controlId="formGridFrontImageFile">
          <Form.File 
            id="frontImageFile" 
            label="Upload file" 
            value={values.frontImage} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="formGridFrontImage">
          <Form.Label>Front Message</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter URL for postcard's image" 
            value={values.frontImage} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="formGridFrontMessage">
          <Form.Label>Front Message</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter message on the front" 
            value={values.frontMessage} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="formGridBackMessage">
          <Form.Label>Back Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows="4" 
            value={values.backMessage} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="formGridSenderName">
          <Form.Label>Sender Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter sender's name" 
            value={values.senderName} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="formGridSenderTitle">
          <Form.Label>Sender Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter sender's title (optional)" 
            value={values.senderTitle} 
            onChange={handleChange} 
          />
        </Form.Group>
      </Form>
    )}
  </Formik>
);

export default PostcardForm;
