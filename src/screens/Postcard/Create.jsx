import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { Button, Container, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { AuthContext } from 'context/AuthContext';
import { createPostcard, fetchPostcard } from 'services/postcardServices';
import { fetchCampaign } from 'services/campaignServices';

const ScreensPostcardCreate = () => {

  const authContext = useContext(AuthContext);
  const { campaignId } = useParams();
  const history = useHistory();
  
  const [isLoading, setIsLoading] = useState(false);
  const [createSuccess, setCreateSuccess] = useState('');
  const [createError, setCreateError] = useState('');

  const [defaultPostcard, setDefaultPostcard] = useState({
    userId: authContext.authState._id,
    campaignId: campaignId,
    frontImageFile: '',
    frontImage: '',
    frontMessage: '',
    backMessage: '',
    senderName: '',
    senderTitle: '',
  });

  useEffect(() => {
    async function getPostcard() {
      const campaign = await fetchCampaign(campaignId);
      const defaultPostcardValues = await fetchPostcard(campaign.defaultPostcardId);
      defaultPostcardValues.isDefault = false;
      defaultPostcardValues.campaignId = campaignId;
      setDefaultPostcard(defaultPostcardValues);
    }
    setIsLoading(true);
    getPostcard();
    setIsLoading(false);
  }, []);

  return (
    <Container className="p-3">
      <h1 className="header">Create a Postcard</h1>
      <Formik
        enableReinitialize={true}
        initialValues={defaultPostcard}
        onSubmit={async(values) => {
          setIsLoading(true);
          setCreateError('');
          try {
            const postcard = await createPostcard(values);
            console.log('postcard: ', postcard);
            setIsLoading(false);
            setCreateSuccess('Postcard creation successful!');
            setTimeout(() => {
              history.push(`/postcard/${postcard._id}`);
            }, 1500);      
          }
          catch (error) {
            setIsLoading(false);
            setCreateError(error.message);
          }      
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGridFrontImageFile">
              <Form.File 
                id="frontImageFile" 
                name="frontImageFile" 
                label="Upload file" 
                value={values.frontImageFile} 
                onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="formGridFrontImage">
              <Form.Label>Front Image</Form.Label>
              <Form.Control 
                type="text" 
                name="frontImage" 
                placeholder="Enter URL for postcard's image" 
                value={values.frontImage} 
                onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="formGridFrontMessage">
              <Form.Label>Front Message</Form.Label>
              <Form.Control 
                type="text" 
                name="frontMessage" 
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
                name="backMessage" 
                value={values.backMessage} 
                onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="formGridSenderName">
              <Form.Label>Sender Name</Form.Label>
              <Form.Control 
                type="text" 
                name="senderName" 
                placeholder="Enter sender's name" 
                value={values.senderName} 
                onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="formGridSenderTitle">
              <Form.Label>Sender Title</Form.Label>
              <Form.Control 
                type="text" 
                name="senderTitle" 
                placeholder="Enter sender's title (optional)" 
                value={values.senderTitle} 
                onChange={handleChange} 
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
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
