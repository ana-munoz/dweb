import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    width: "85%",
    //padding: "10px",
    margin: '0px 20px 0px',
  },
}));
const columns = [
  {field: 'id', headerName: 'ID', width: '90'},
  {field: 'nombre', headerName: 'Nombre', width: '150'},
  {field: 'genero', headerName: 'Género', width:'150'},
  {field: 'descripcion', headerName: 'Descripción', width: '200'},
  {field: 'anho', headerName: 'Año', width: '120'},
  {field: 'peso', headerName: 'Peso', width: '150'},
  {field: 'precio', headerName: 'Precio', width: '120'},
  {field: 'stock', headerName: 'Stock', width: '120'},
  { field: 'action', headerName: 'Accion', width: 180, renderCell: (params: GridCellParams)=> (
    <strong>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit">
        <EditIcon />
      </IconButton>
    </strong>
  )}
];

const rows = [
  {id: '1', nombre: 'Vinilo1', genero: 'Genero1', descripcion: 'test......', anho: '1234', peso: '180gr', precio: '$1111', stock: '5'},
  {id: '2', nombre: 'Vinilo2', genero: 'Genero2', descripcion: 'test......',anho: '1234', peso: '180gr', precio: '$1111', stock: '5'},
  {id: '3', nombre: 'Vinilo3', genero: 'Genero3', descripcion: 'test......',anho: '1234', peso: '180gr', precio: '$1111', stock: '5'},
  {id: '4', nombre: 'Vinilo4', genero: 'Genero2', descripcion: 'test......',anho: '1234', peso: '180gr', precio: '$1111', stock: '5'},
];


export default function Crud_Vinilos() {
  const classes = useStyles(); 
  return (
    <div className={classes.root}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
      
    </div>
  );
}