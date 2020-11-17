import React, { useEffect, useState } from 'react';
import { fetchAllCampaigns } from 'services/campaignServices';
import { fetchAllPostcards } from 'services/postcardServices';
import { fetchAllUsers } from 'services/services';
import AdminTablePres from './AdminTablePres';
import AdminTablePostcards from './Postcards/Postcards';

const AdminTable = ({ selectedTable }) => {
 
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const campaignColumns = [
    { description: 'ID', objName: '_id' },
    { description: 'Title', objName: 'title' },
    { description: 'Description', objName: 'description' },
    { description: 'Author', objName: 'userId' },
    { description: 'Recipient', objName: 'recipient' },
    { description: 'City', objName: 'addressId.city' },
    { description: 'State', objName: 'addressId.state' },
  ];

  const postcardColumns = [
    { description: 'ID', objName: '_id' },
    { description: 'Sender', objName: 'senderName' },
    { description: 'Front Message', objName: 'frontMessage' },
    { description: 'Back Message', objName: 'backMessage' }
  ];

  const userColumns = [
    { description: 'ID', objName: '_id' },
    { description: 'Email address', objName: 'email' },
    { description: 'First Name', objName: 'firstName' },
    { description: 'Last Name', objName: 'lastName' },
    { description: 'Created at', objName: 'createdAt' }
  ];


  useEffect(() => {
    async function fetchData() {
      let response = [];
      if (selectedTable === 'Campaigns')
        response = await fetchAllCampaigns();
      if (selectedTable === 'Postcards')
        response = await fetchAllPostcards();
      if (selectedTable === 'Users')
        response = await fetchAllUsers();
      setTableData(response);
    }
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, [selectedTable]);

  return (
    <>
      {isLoading && <p>Fetching...</p>}
      {!isLoading && selectedTable === 'Campaigns' &&
        <AdminTablePres data={tableData} type={selectedTable} columns={campaignColumns} />
      }
      {!isLoading && selectedTable === 'Postcards' &&
        <AdminTablePostcards postcards={tableData} />
      }
      {!isLoading && selectedTable === 'Users' &&
        <AdminTablePres data={tableData} type={selectedTable} columns={userColumns} />
      }
    </>
  );
};

export default AdminTable;
