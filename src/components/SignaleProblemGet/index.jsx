import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../datatable/style.css'
import TableScrollbar from 'react-table-scrollbar'; 


export default function Datatable() { 
   
  const [q, setQ] = useState('');
  const [searchColumns, setSearchColumns] = useState([
    
  ]);

function search(rows) {
  return rows.filter((row) =>
    searchColumns.some(
      (column) =>
        row[column]
          .toString()
          .toLowerCase()
          .indexOf(q.toLowerCase()) > -1,
    ),
  );
}



  /* GET METHOD */ 
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/ape/signale')
    .then(res=> setPosts(res.data))
    .catch(error=> console.log(error))
  });
  const columns = posts[0] && Object.keys(posts[0]);
return (
          <div> 


<div>
      <input
          type='text'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {columns &&
          columns.map((column) => (
            <label>
              <input
                type='checkbox'
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column],
                  );
                }}
              />
             
              {column}
            </label>
          ))}
      </div>
      <div className='TableRendezVous'>
       < TableScrollbar> 



               <table >
            
      <thead  className='TableHead'>
        <tr  >
          {posts[0] && columns.map((heading) => <th>{heading}</th>)}
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
           </div>
);
}
