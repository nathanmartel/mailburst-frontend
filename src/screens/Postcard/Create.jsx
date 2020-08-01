import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { createCampaign } from '../../../services/campaignServices';
import { AuthContext } from '../../../context/AuthContext';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { createPostcard } from '../../services/postcardServices';

const ScreensPostcardCreate = () => {

  const authContext = useContext(AuthContext);
  
  const [isLoading, setIsLoading] = useState(false);
  const [createSuccess, setCreateSuccess] = useState('');
  const [createError, setCreateError] = useState('');

  return (
    <Container className="p-3">
      <h1 className="header">Create a Postcard</h1>
      <Formik
        initialValues={{
          userId: authContext.authState._id,
          frontImageFile: '',
          frontImage: '',
          frontMessage: '',
          backMessage: '',
          senderName: '',
          senderTitle: '',
        }}
        onSubmit={(values) => {
          setIsLoading(true);
          alert(JSON.stringify(values, null, 2));
          setCreateError('');
          try {
            const campaign = await createPostcard(values)
            console.log('campaign: ', campaign);
            setIsLoading(false);
            setCreateSuccess('Campaign creation successful!');
          }
          catch (error) {
            setIsLoading(false);
            setCreateError(error.message);
          }      
        }}
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
      {isLoading && <p>Creating postcard...</p> }
      {createSuccess && <p>{createSuccess}</p> }
      {createError && <p>{createError}</p> }
    </Container>
  );
};

export default ScreensPostcardCreate;
