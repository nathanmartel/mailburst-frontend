import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { fetchAllPostcards, fetchUserPostcards } from '../../../services/postcardServices';
import PostcardEntry from '../../../components/Postcard/PostcardEntry/PostcardEntry';

const ScreensPostcardViewAll = ({ userId }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [postcardInfo, setPostcardInfo] = useState([]);

  const postcardEntries = postcardInfo.map(postcard => 
    <PostcardEntry key={postcard._id} postcard={postcard} />);

  useEffect(() => {
    async function getAllCampaigns() {
      setIsLoading(true);
      let fetchedPostcards;
      if (userId) fetchedPostcards = await fetchUserPostcards(userId);
      else fetchedPostcards = await fetchAllPostcards();
      setPostcardInfo(fetchedPostcards);
      setIsLoading(false);
    }
    getAllCampaigns();
  }, []);


  return (
    <Container className="p-3">
      <h1 className="header">
        { userId ? 'Your Postcards' : 'View All Postcards' }
      </h1>
      <hr />
      {isLoading && <p>Fetching...</p> }
      {postcardInfo.length > 0 && !isLoading && 
        <ul>
          {postcardEntries}
        </ul>
      }
    </Container>
  );
};

export default ScreensPostcardViewAll;
