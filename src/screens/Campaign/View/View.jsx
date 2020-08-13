import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router';
import { fetchCampaign } from '../../../services/campaignServices';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
      <h1 className="header">View Campaign</h1>
      <hr />
      {isLoading && <p>Fetching...</p> }
      {campaignInfo && !isLoading &&
        <> 
          <h3>{campaignInfo?.title}</h3>
          <p>{campaignInfo?.description}</p>
          <h4>Recipient</h4>
          <p>{campaignInfo?.recipient}<br />
            {campaignInfo?.addressId?.street1}<br />
            {campaignInfo?.addressId?.street2 && 
              <>
                {campaignInfo?.addressId?.street2}
                <br />
              </>
            }
            {campaignInfo?.addressId?.city}, {campaignInfo?.addressId?.state} {campaignInfo?.addressId?.zip}</p>
          <hr />
          <Link to={`/viewCampaign/${campaignInfo._id}/createPostcard`}>
            <Button>Create a Postcard</Button>
          </Link>
        </>
      }
    </Container>
  );
};

export default ScreensCampaignView;
