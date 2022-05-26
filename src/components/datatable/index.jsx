 
import React from 'react';
import "./style.css"
import TableScrollbar from 'react-table-scrollbar'; 
export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div className='TableRendezVous'>
      
    < TableScrollbar>
    <table  cellPadding={0} cellSpacing={0}>
      <thead className='TableHead' >
        <tr  >
          {data[0] && columns.map((heading) => <th  className='zb'>{heading}</th>)}
          <th> Action </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
              <td> <button> Accepter </button> <button> Refuser </button> </td>  
          </tr>  
        ))} 
      </tbody>
    </table>
    </TableScrollbar>
    </div>
  );
}

