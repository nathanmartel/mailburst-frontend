import React from 'react';
import { Link } from 'react-router-dom';

const AdminTablePostcardsRow = ({ postcard, columnData }) => {

  const tableColumns = columnData.map(column => 
    <td key={column.objName}>{ postcard?.[column.objName] }</td>);

  return (
    <tr>
      {tableColumns}
      <td>
        <Link to={`/viewPostcard/${postcard._id}`}>
          View
        </Link>
      </td>
    </tr>
  );
};

export default AdminTablePostcardsRow;
