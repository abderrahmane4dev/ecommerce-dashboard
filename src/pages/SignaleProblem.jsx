import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/datatable/style.css'
import Datatable from '../components/Candidature/index';
import TableScrollbar from 'react-table-scrollbar'; 
import "./index.css"
import { DataGrid } from '@mui/x-data-grid';
import {  GridToolbarExport,
  GridToolbarContainer ,GridRenderEditCellParams } from '@mui/x-data-grid';

  
  function MyExportButton() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
export default function Candidature() { 
 


const columns = [
  { field: '_id', headerName: 'Id', width: 100 , editable: true },
  { field: 'Nom', headerName: 'Nom', width: 70 },
  { field: 'Prenom', headerName: 'Prenom', width: 130 },
  { field: 'Email', headerName: 'Email', width: 130 },
  { field: 'Agence',headerName: 'Agence',width: 130, },
  { field: 'Numero', headerName: 'Numero', width: 130,},
  { field: 'Type',headerName: 'type',width: 130,editable: true,
},
  { field: 'Message',headerName: 'Message',width: 130, },
  { field: 'Date',headerName: 'Date',width: 130, },
  { field: 'Action',headerName: 'Action',width: 130,
  renderCell: (params) =>{
    const deleteSig =(id)=> {
      axios.delete(`http://localhost:5000/ape/delete/${id}`)
   }
   const updateSignale = (id)=>{
    const type = prompt("enter ur new type please")
    axios.put("http://localhost:5000/ape/update",{NewType:type , id:id});
   }
    
    return  <div><button id="delete" onClick={()=> deleteSig(params.row._id)}>Delete</button>
    <button id="delete" onClick={()=> updateSignale(params.row._id)}>Update</button></div>;
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
      <div className='TitleFormulaire'><h2> Signale des Problemes</h2> </div>
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
        experimentalFeatures={{ newEditingApi: true }}
        onCellEditStop={(params, event) => {
           event.updateSignale(params.row._id,params.row.Type) ;
        }}
      />
       
    </div>
  
    
  </div>

);
}