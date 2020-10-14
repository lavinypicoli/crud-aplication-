import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import './App.css';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  button:{
    backgroundColor: '#32CD32'
  },
  updateButton: {
    backgroundColor: '#FFD700'
  },
  deleteButton: {
    backgroundColor: '#FF0000'
  },
  table: {
    minWidth: 650,
  },
}));

function App() {

const classes = useStyles();
const bull = <span className={classes.bullet}>•</span>;

const [serial, setSerial] = useState("");
const [lat, setLat] = useState("");
const [lon, setLon] = useState("");
const [nome, setNome] = useState("");
const [estacoesList, setEstacoesList] = useState([]);

useEffect(() =>{
  Axios.get('http://localhost:3001/api/get').then((response) => {
    setEstacoesList(response.data);
  });
}, []);

const submit = () =>{
    Axios.post('http://localhost:3001/api/insert', {
      serial: serial,
      lat: lat,
      lon: lon,
      nome: nome,
    });
    setEstacoesList([
      ...estacoesList, {
        serial: serial,
        lat: lat,
        lon: lon,
        nome: nome,
      },
    ]);
};

  return (
    <div className={classes.root}>
      <Card className={classes.root}>
      <CardContent>
      <div>
            <h1>Estação Metereológica</h1>
            <p>Cadastre a estação </p>
            <TextField
                id="outlined-full-width"
                label="Serial"
                name="serial" onChange={(e) =>{setSerial(e.target.value);}}
                style={{ margin: 20 }}
                placeholder="serial"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
                  <TextField
                id="outlined-full-width"
                label="Latitude"
                name="lat" onChange={(e) =>{setLat(e.target.value);}}
                style={{ margin: 20 }}
                placeholder="latitude"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
                  <TextField
                id="outlined-full-width"
                label="Longitude"
                name="lon" onChange={(e) =>{setLon(e.target.value);}}
                style={{ margin: 20 }}
                placeholder="longitude"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
                  <TextField
                id="outlined-full-width"
                label="Nome"
                name="nome" onChange={(e) =>{setNome(e.target.value);}}
                style={{ margin: 20 }}
                placeholder="nome"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Button variant="contained" className={classes.button}
              type="submit" onClick={submit}>Cadastrar</Button>
            </div>
             
      </CardContent>
    </Card>
        
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableCell align="left">Serial</TableCell>
                <TableCell align="left">Latitude</TableCell>
                <TableCell align="left">Longitude</TableCell>
                <TableCell align="left">Nome</TableCell>
                <TableCell align="left">Action</TableCell>
                <TableCell align="left">Action</TableCell>  
                <TableCell align="left">Action</TableCell> 
              </TableHead>
              
                {estacoesList.map((estacao) => (
                  <TableBody>
                    {console.log(estacao)}
                    <TableCell align="left">{estacao.serial}</TableCell>
                    <TableCell align="left">{estacao.lat}</TableCell>
                    <TableCell align="left">{estacao.lon}</TableCell>
                    <TableCell align="left">{estacao.nome}</TableCell>
                    <TableCell>
                      <Button variant="contained" className={classes.deleteButton}> Delete </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" className={classes.updateButton}> Update </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary">Inserir novos dados</Button>
                    </TableCell>
                  </TableBody>
                ))}
              
            </Table>
          </TableContainer>
    
    </div>
  );
}

export default App;
