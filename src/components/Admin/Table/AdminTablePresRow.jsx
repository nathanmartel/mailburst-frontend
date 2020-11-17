import React from 'react';
import AdminTablePresRowActionsCampaign from './AdminTablePresRowActionsCampaign';
import AdminTablePresRowActionsPostcard from './AdminTablePresRowActionsPostcard';
import AdminTablePresRowActionsUser from './AdminTablePresRowActionsUser';

const AdminTablePresRow = ({ item, type, index, columns, actions }) => {

  const tableColumns = columns.map(column => 
    <td key={column.objName}>{ item?.[column.objName] }</td>);

  return (
    <tr>
      <td>{index}</td>
      {tableColumns}
      { type === 'Campaigns' &&
        <td><AdminTablePresRowActionsCampaign _id={item._id} /></td>
      }
      { type === 'Postcards' &&
        <td><AdminTablePresRowActionsPostcard _id={item._id} /></td>
      }
      { type === 'Users' &&
        <td><AdminTablePresRowActionsUser _id={item._id} /></td>
      }
    </tr>
  );
};

export default AdminTablePresRow;
