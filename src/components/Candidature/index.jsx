 
import React from 'react';

import TableScrollbar from 'react-table-scrollbar'; 

export default function Datatable({ posts }) {
  const columns = posts[0] && Object.keys(posts[0]);
  return (
    <div className='TableRendezVous'>
      
    < TableScrollbar>
    <table >
      <thead className='TableHead' >
        <tr  >
          {posts[0] && columns.map((heading) => <th  className='zb'>{heading}</th>)}
       
        </tr>
       
      </thead>
      <tbody>
        {posts.map((row) => (
          <tr>
            
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
                 
          </tr>  
        ))} 
      </tbody>
    </table>
    </TableScrollbar>
    </div>
  );
}

