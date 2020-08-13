import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { AuthContext } from '../../../context/AuthContext';
import { Button } from 'react-bootstrap';
import { fetchPostcard } from '../../../services/postcardServices';
import { sendPostcardToLob } from '../../../services/lobServices';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ScreensPostcardView = () => {

  const authContext = useContext(AuthContext);
  const { postcardId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [sendSuccess, setSendSuccess] = useState('');
  const [sendFailure, setSendFailure] = useState('');
  const [postcard, setPostcard] = useState({});

  const sendPostcard = async() => {
    try {
      const res = await sendPostcardToLob(postcard._id);
      setSendSuccess('Success!', res);
    }
    catch (error) {
      setSendFailure(error.message);
      console.log(JSON.stringify(error));
    }
  };

  useEffect(() => {
    async function getPostcard() {
      const postcardValues = await fetchPostcard(postcardId);
      setPostcard(postcardValues);
    }
    setIsLoading(true);
    getPostcard();
    setIsLoading(false);
  }, []);

  return (
    <Container className="p-3">
      <h1 className="header">View a Postcard</h1>
      <hr />
      {isLoading && <p>Fetching...</p> }
      {postcard && !isLoading &&
        <> 
          <h3>Front</h3>
          <p>{postcard?.frontImage}</p>
          <p>{postcard?.frontMessage}</p>
          <hr />
          <h3>Back</h3>
          <p>{postcard?.backMessage}</p>
          <p>{postcard?.senderName}</p>
          <p>{postcard?.senderTitle}</p>
          <hr />
          <h4>Details</h4>
            UserId: {postcard?.userId}<br />
            CampaignId: {postcard?.campaignId}<br />
            isDefault: {postcard?.isDefault?.toString()}
          <hr />
          <Button onClick={() => sendPostcard()}>Send Card</Button>
          {sendSuccess && <p>{sendSuccess}</p>}
          {sendFailure && <p>{sendFailure}</p>}
        </>
      }    
    </Container>
  );
};

export default ScreensPostcardView;
