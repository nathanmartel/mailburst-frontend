import React from 'react';
import { Link } from 'react-router-dom';

const AdminTablePresRowActionsUser = ({ _id }) => (
  <>
    <Link to={`user/${_id}`}>View</Link>&nbsp;&bull;&nbsp;
    <Link to={`user/${_id}/edit`}>Edit</Link>&nbsp;&bull;&nbsp;
    <Link to={`user/${_id}/json`}>Full JSON</Link>
  </>
);

export default AdminTablePresRowActionsUser;
