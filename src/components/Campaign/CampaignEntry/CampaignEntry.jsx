import React from 'react';
import { Link } from 'react-router-dom';

const CampaignEntry = ({ campaign }) => (
  <li>
    <Link to={`/viewCampaign/${campaign._id}`}>
      {campaign._id } | {campaign.title } | {campaign?.postcards?.length } postcards submitted
    </Link>
  </li>
);

export default CampaignEntry;
