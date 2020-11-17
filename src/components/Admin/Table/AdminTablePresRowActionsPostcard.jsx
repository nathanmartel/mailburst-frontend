import React from 'react';
import { Link } from 'react-router-dom';

const AdminTablePresRowActionsPostcard = ({ _id }) => (
  <>
    <Link to={`postcard/${_id}`}>View</Link>&nbsp;&bull;&nbsp;
    <Link to={`postcard/${_id}/edit`}>Edit</Link>&nbsp;&bull;&nbsp;
    <Link to={`postcard/${_id}/delete`}>Delete</Link>&nbsp;&bull;&nbsp;
    <Link to={`postcard/${_id}/json`}>Full JSON</Link>
  </>
);

export default AdminTablePresRowActionsPostcard;
