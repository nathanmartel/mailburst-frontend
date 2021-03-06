import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { fetchAllCampaigns, fetchUserCampaigns } from 'services/campaignServices';
import CampaignEntry from 'components/Campaign/CampaignEntry/CampaignEntry';

const ScreensCampaignViewAll = ({ userId }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [campaignInfo, setCampaignInfo] = useState([]);

  const campaignEntries = campaignInfo.map(campaign => 
    <CampaignEntry key={campaign._id} campaign={campaign} />);

  useEffect(() => {
    async function getAllCampaigns() {
      setIsLoading(true);
      let fetchedCampaigns;
      if (userId) fetchedCampaigns = await fetchUserCampaigns(userId);
      else fetchedCampaigns = await fetchAllCampaigns();
      setCampaignInfo(fetchedCampaigns);
      setIsLoading(false);
    }
    getAllCampaigns();
  }, []);


  return (
    <Container className="p-3">
      <h1 className="header">
        { userId ? 'Your Campaigns' : 'View All Campaigns' }
      </h1>
      <hr />
      {isLoading && <p>Fetching...</p> }
      {campaignInfo.length > 0 && !isLoading && 
        <ul>
          {campaignEntries}
        </ul>
      }
    </Container>
  );
};

export default ScreensCampaignViewAll;
