import React, { useEffect, useState } from 'react';
import { fetchAllPostcards } from 'services/postcardServices';
import AdminTablePostcards from './Postcards/Postcards';

const AdminTable = ({ selectedTable }) => {

  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let response = [];
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
      {!isLoading && selectedTable === 'Postcards' &&
        <AdminTablePostcards postcards={tableData} />
      }
    </>
  );
};

export default AdminTable;
