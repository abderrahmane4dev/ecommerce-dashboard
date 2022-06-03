import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/datatable/style.css'
import Datatable from '../components/Candidature/index';
import TableScrollbar from 'react-table-scrollbar'; 
import "./index.css"
import { DataGrid } from '@mui/x-data-grid';
import {  GridToolbarExport,
  GridToolbarContainer } from '@mui/x-data-grid';

  
  function MyExportButton() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
export default function Candidature() { 
 


const columns = [
  { field: '_id', headerName: 'Id', width: 100 },
  { field: 'Nom', headerName: 'Nom', width: 70 },
  { field: 'Prenom', headerName: 'Prenom', width: 130 },
  { field: 'Email', headerName: 'Email', width: 130 },
  { field: 'Agence',headerName: 'Agence',width: 130, },
  { field: 'Numero', headerName: 'Numero', width: 130,},
  { field: 'Type',headerName: 'type',width: 130, },
  { field: 'Message',headerName: 'Message',width: 130, },
  { field: 'Date',headerName: 'Date',width: 130, },
  { field: 'Action',headerName: 'Action',width: 130,
  renderCell: () => {
   

    return <button>Click</button>;
  }
},
];

  /* GET METHOD */ 
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
   
    axios.get('http://localhost:5000/ape/signale')
    .then(res=> setPosts(res.data) 
     )
    .catch(error=> console.log(error))
  });

  
return (
  
  <div  className="Data">
  <div  style={{ height: 600, width: '90%' }}>
   
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={9}
        getRowId={(r) => r._id}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{
          Toolbar: MyExportButton,
        }}
      />
       
    </div>
  
    
  </div>

);
}