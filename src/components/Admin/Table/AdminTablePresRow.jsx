import React from 'react';
import { Link } from 'react-router-dom';
import AdminTablePresRowActionsCampaigns from './AdminTablePresRowActionsCampaigns AdminTablePresRowActionsCampaigns';

const AdminTablePresRow = ({ item, type, index, columns, actions }) => {

  const tableColumns = columns.map(column => 
    <td key={column.objName}>{ item?.[column.objName] }</td>);

  return (
    <tr>
      <td>{index}</td>
      {tableColumns}
      { type === 'Campaigns' &&
        <td><AdminTablePresRowActionsCampaigns _id={item._id} /></td>
      }
    </tr>
  );
};

export default AdminTablePresRow;
