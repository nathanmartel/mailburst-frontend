import React from 'react';
import { Link } from 'react-router-dom';

const PostcardTableRow = ({ postcard }) => (
  <tr>
    <td>
      {postcard?._id}
    </td>
    <td>
      {postcard?.senderName}
    </td>
    <td>
      {postcard?.frontMessage}
    </td>
    <td>
      {postcard?.backMessage}
    </td>
    <td>
      <Link to={`/viewPostcard/${postcard._id}`}>
        View
      </Link>
    </td>
  </tr>
);

export default PostcardTableRow;
