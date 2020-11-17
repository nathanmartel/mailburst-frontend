import React from 'react';
import { Link } from 'react-router-dom';

const AdminTablePresRowActionsCampaigns = ({ _id }) => (
  <>
    <Link to={`campaign/${_id}`}>View</Link>
    <Link to={`campaign/${_id}/edit`}>Edit</Link>
  </>
);

export default AdminTablePresRowActionsCampaigns;
