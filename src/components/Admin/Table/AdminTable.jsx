import React, { useEffect, useState } from 'react';
import { fetchAllCampaigns } from 'services/campaignServices';
import { fetchAllPostcards } from 'services/postcardServices';
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


  useEffect(() => {
    async function fetchData() {
      let response = [];
      if (selectedTable === 'Campaigns')
        response = await fetchAllCampaigns();
      if (selectedTable === 'Postcards')
        response = await fetchAllPostcards();
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
    </>
  );
};

export default AdminTable;
