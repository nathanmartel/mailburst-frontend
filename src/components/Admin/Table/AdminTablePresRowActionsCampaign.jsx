import React from 'react';
import { Link } from 'react-router-dom';

const AdminTablePresRowActionsCampaign = ({ _id }) => (
  <>
    <Link to={`campaign/${_id}`}>View</Link>&nbsp;&bull;&nbsp;
    <Link to={`campaign/${_id}/edit`}>Edit</Link>
  </>
);

export default AdminTablePresRowActionsCampaign;
