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
export default function Formulaire() { 
 

/* formulere 1 */
const columns = [
  { field: '_id', headerName: 'Id', width: 100 },
  { field: 'Nom', headerName: 'Nom', width: 170 },
  { field: 'Agence', headerName: 'Agence', width: 130 },
  { field: 'Numero', headerName: 'Numero', width: 130 },
  { field: 'Type',headerName: 'Type',width: 130, },
  { field: 'Date', headerName: 'Date', width: 130,},
];

  /* GET METHOD */ 
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
   
    axios.get('http://localhost:5000/ape/formulaireDemandeCarnetCheque')
    .then(res=> setPosts(res.data) 
     )
    .catch(error=> console.log(error))
  });

/* formulere 2 */
const columns2 = [
    { field: '_id', headerName: 'Id', width: 100 },
    { field: 'Nom', headerName: 'Nom', width: 170 },
    { field: 'Adresse', headerName: 'Adresse', width: 130 },
    { field: 'Agence', headerName: 'Agence', width: 130 },
    { field: 'Numero', headerName: 'Numero', width: 130 },
    { field: 'Montant',headerName: 'Montant',width: 130, },
    { field: 'SommeLettre',headerName: 'Somme en lettre',width: 180, },
    { field: 'OrdreL',headerName: 'Ordre de virement',width: 150, },
    { field: 'Date', headerName: 'Date', width: 130,},
  ];
  
    /* GET METHOD */ 
    const [posts2,setPosts2]=useState([]);
    useEffect(()=>{
     
      axios.get('http://localhost:5000/ape/formulaireDemandeCheque')
      .then(res=> setPosts2(res.data) 
       )
      .catch(error=> console.log(error))
    });

    /* formulere 3 */
const columns3 = [
    { field: '_id', headerName: 'Id', width: 100 },
    { field: 'Nature', headerName: 'Nature', width: 170 },
    { field: 'Numero', headerName: 'Numero', width: 170 },
    { field: 'NomC', headerName: 'Nom client', width: 170 },
    { field: 'AgenceV', headerName: 'Agence', width: 170 },
    { field: 'Montant', headerName: 'Montant', width: 170 },
    { field: 'MontantL', headerName: 'Montant en lettre', width: 170 },
    { field: 'MonaireVir', headerName: 'Monaire Virement', width: 170 },
    { field: 'AdresseDonneur', headerName: 'Adresse du Donneur', width: 170 },
    { field: 'AdresseBenif',headerName: 'Adresse Benificaire',width: 170, },
    { field: 'BanqueBenif',headerName: 'Banque benificaire',width: 170, },
    { field: 'NatureRel',headerName: 'Nature Relation',width: 130, },
    { field: 'MotifV',headerName: 'Motif ',width: 130, },
    { field: 'Date', headerName: 'Date', width: 130,},
  ];
  
    /* GET METHOD */ 
    const [posts3,setPosts3]=useState([]);
    useEffect(()=>{
     
      axios.get('http://localhost:5000/ape/formulaireOrdreVirement')
      .then(res=> setPosts3(res.data) 
       )
      .catch(error=> console.log(error))
    });
  
return (
  
  <div  className="Data">
       <div className='TitleFormulaire'><h2> Demande de Carnet de cheque</h2> </div>
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
   <div className='TitleFormulaire'><h2> Demande de cheque du Banque</h2> </div>
    <div  style={{ height: 600, width: '90%' }}>
   
      <DataGrid
        rows={posts2}
        columns={columns2}
        pageSize={9}
        getRowId={(r) => r._id}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{
          Toolbar: MyExportButton,
        }}
      />
       
    </div>
    <div className='TitleFormulaire'><h2> Ordre de Virement</h2> </div>
    <div  style={{ height: 600, width: '90%' }}>
   
   <DataGrid
     rows={posts3}
     columns={columns3}
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