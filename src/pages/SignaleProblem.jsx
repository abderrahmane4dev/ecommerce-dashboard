import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/datatable/style.css'
import Datatable from '../components/Candidature/index';
import TableScrollbar from 'react-table-scrollbar'; 


export default function Candidature() { 
 

 
  const [q, setQ] = useState('');
  const [searchColumns, setSearchColumns] = useState([
    'Nom',
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
  <div >
  <div className='SearchData'>
  <input className='SearchInputt'
      type='text'
      value={q}
      onChange={(e) => setQ(e.target.value)}
    />
    {columns &&
      columns.map((column) => (
        <label className='Label'>
          <input className='Labell'
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
  
  <div>
  <Datatable posts={search(posts)} />
    
  </div>
</div>
);
}