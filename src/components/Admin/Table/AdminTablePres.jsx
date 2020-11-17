import React from 'react';
import { Table } from 'react-bootstrap';
import AdminTablePresRow from './AdminTablePresRow';

const AdminTablePres = ({ 
  data = [], 
  type = '', 
  columns = [] 
}) => {

  const tableHeaders = columns.map(header => 
    <th key={header.objName}>{ header.description }</th>);

  const tableRows = data.map(item => 
    <AdminTablePresRow key={item._id} item={item} columns={columns} />);

  return (
    <>
      { data.length === 0 && <p>There are currently no {type.toLowerCase()}.</p>}
      { data.length > 0 &&
        <>
          <h4 className="header">{type} entries</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                {tableHeaders}
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </Table>
        </>
      }
    </>
  );
};

export default AdminTablePres;
