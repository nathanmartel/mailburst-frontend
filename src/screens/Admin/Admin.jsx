import React, { useState } from 'react';
import { Container, FormControl } from 'react-bootstrap';
import AdminTable from 'components/Admin/Table/AdminTable';

const ScreensAdmin = () => {

  const [selectedTable, setSelectedTable] = useState('Campaigns');

  return (
    <Container className="p-3">
      <h1 className="header">Admin tools</h1>
      <FormControl as="select" onChange={(e) => setSelectedTable(e.target.value)}>
        <option>Campaigns</option>
        <option>Postcards</option>
        <option>Users</option>
      </FormControl>
      <AdminTable selectedTable={selectedTable} />
    </Container>
  );
};

export default ScreensAdmin;
