import React from 'react';
import { Link } from 'react-router-dom';

const AdminTablePresRow = ({ item, index, columns }) => {

  const tableColumns = columns.map(column => 
    <td key={column.objName}>{ item?.[column.objName] }</td>);

  return (
    <tr>
      <td>{index}</td>
      {tableColumns}
      <td>
        <Link to={`/viewPostcard/${item._id}`}>
          View
        </Link>
      </td>
    </tr>
  );
};

export default AdminTablePresRow;
