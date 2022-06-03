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
  { field: 'Civilite', headerName: 'Civilité', width: 100 },
  { field: 'Nom', headerName: 'Nom', width: 130 },
  { field: 'Prenom', headerName: 'Prenom', width: 130 },
  { field: 'Age', headerName: 'Age', width: 90 },
  { field: 'Wilaya',headerName: 'Wilaya',width: 130, },
  { field: 'Adresse',headerName: 'Adresse',width: 130, },

  { field: 'Ville', headerName: 'Ville', width: 130,},
  { field: 'Email',headerName: 'Email',width: 130, },
  { field: 'Diplome',headerName: 'Diplome',width: 130, },
  { field: 'Specialite',headerName: 'Specialité',width: 130, },
  { field: 'Filiere',headerName: 'Filiére',width: 130, },
  { field: 'Experience',headerName: 'Expérience',width: 130, },
  { field: 'Poste',headerName: 'Poste',width: 130, },
  { field: 'Action',headerName: 'Action',width: 130,
  renderCell: () => {
   

    return <button>Click</button>;
  }
},
];

  /* GET METHOD */ 
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
   
    axios.get('http://localhost:5000/ape/recrut')
    .then(res=> setPosts(res.data) 
     )
    .catch(error=> console.log(error))
  });

  
return (
  
  <div  className="Data">
      <div className='TitleFormulaire'><h2> Candidature</h2> </div>
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