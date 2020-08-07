import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router';
import { fetchCampaign } from '../../../services/campaignServices';

const ScreensCampaignView = () => {

  const { campaignId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [campaignInfo, setCampaignInfo] = useState({});

  useEffect(() => {
    async function getCampaign() {
      setIsLoading(true);
      const fetchedCampaign = await fetchCampaign(campaignId);
      setCampaignInfo(fetchedCampaign);
      setIsLoading(false);
    }
    getCampaign();
  }, [campaignId]);


  return (
    <Container className="p-3">
      { console.log('campaignId', campaignId) }
      <h1 className="header">View Campaign</h1>
      <hr />
      {isLoading && <p>Fetching...</p> }
      {campaignInfo &&
        <> 
          <h3>{campaignInfo?.title}</h3>
          <p>{campaignInfo?.description}</p>
          <h4>Recipient</h4>
          <p>{campaignInfo?.recipient}</p>
          <p>{campaignInfo?.address1}</p>
          <p>{campaignInfo?.address2}</p>
          <p>{campaignInfo?.city}, {campaignInfo?.state} {campaignInfo?.zip}</p>
        </>
      }
    </Container>
  );
};

export default ScreensCampaignView;
