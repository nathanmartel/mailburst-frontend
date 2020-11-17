import React, { useEffect, useState } from 'react';
import { fetchAllPostcards } from 'services/postcardServices';

const AdminTable = ({ selectedTable }) => {

  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let response;
    if (selectedTable === 'Postcards') {
      response = fetchAllPostcards();
    }
    setTableData(response);
    setIsLoading(false);
  }, [selectedTable]);

  return (
    <>
      {isLoading && <p>Fetching...</p>}
      {!isLoading && selectedTable == 'Users' &&
        <AdminTablePostcards postcards={tableData} />
      }
    </>
  );
};

export default AdminTable;
