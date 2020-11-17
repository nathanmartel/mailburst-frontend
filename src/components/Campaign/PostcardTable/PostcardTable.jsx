import React from 'react';
import { Table } from 'react-bootstrap';
import PostcardTableRow from 'components/Campaign/PostcardTableRow/PostcardTableRow';

const PostcardTable = ({ postcards = [] }) => {

  const postcardEntries = postcards.map(postcard => 
    <PostcardTableRow key={postcard._id} postcard={postcard} />);

  return (
    <>
      { postcards.length > 0 &&
        <>
          <h3 className="header">Postcard entries</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Sender</th>
                <th>Front Message</th>
                <th>Back Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {postcardEntries}
            </tbody>
          </Table>
        </>
      }
    </>
  );
};

export default PostcardTable;
