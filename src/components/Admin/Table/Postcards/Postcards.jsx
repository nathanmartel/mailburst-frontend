import React from 'react';
import { Table } from 'react-bootstrap';
import AdminTablePostcardsRow from '../PostcardsRow/PostcardsRow';

const AdminTablePostcards = ({ postcards = [] }) => {

  const columnData = [
    { description: 'ID', objName: '_id' },
    { description: 'Sender', objName: 'senderName' },
    { description: 'Front Message', objName: 'frontMessage' },
    { description: 'Back Message', objName: 'backMessage' }
  ];

  const tableHeaders = columnData.map(header => 
    <th key={header.objName}>{ header.description }</th>);

  const postcardEntries = postcards.map(postcard => 
    <AdminTablePostcardsRow key={postcard._id} postcard={postcard} columnData={columnData} />);

  return (
    <>
      { postcards.length === 0 && <p>There are currently no postcards.</p>}
      { postcards.length > 0 &&
        <>
          <h4 className="header">Postcard entries</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                {tableHeaders}
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

export default AdminTablePostcards;
