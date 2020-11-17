import React, { useState } from 'react';
import { Container, FormControl } from 'react-bootstrap';
import AdminTable from 'components/Admin/Table/AdminTable';

const ScreensAdmin = () => {

  const [selectedTable, setSelectedTable] = useState('Users');

  return (
    <Container className="p-3">
      <h1 className="header">Admin tools</h1>
      <FormControl as="select" onChange={(e) => setSelectedTable(e.target.value)}>
        <option>Users</option>
        <option>Campaigns</option>
        <option>Postcards</option>
      </FormControl>
      <AdminTable selectedTable={selectedTable} />
    </Container>
  );
};

export default ScreensAdmin;
