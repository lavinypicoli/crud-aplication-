import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
  }));


function App() {

    const [estacao_id, setEstacao_id] = useState("");
    const [temperatura, setTemperatura] = useState("");
    const [velocidade_vento, setVelocidade_vento] = useState("");
    const [umidade, setUmidade] = useState("");
    const [data, setData] = useState("");
    const [dadosList, setDadosList] = useState([]);

    const submit = () =>{
        Axios.post('http://localhost:3001/api/updateDados/${id}', {
            estacao_id: estacao_id,
            temperatura: temperatura,
            velocidade_vento: velocidade_vento,
            umidade: umidade,
            data: data,
        });
        setDadosList([
            ...dadosList, {
              estacao_id: estacao_id,
            temperatura: temperatura,
            velocidade_vento: velocidade_vento,
            umidade: umidade,
            data: data,
            },
          ]);

    };    

    return(
        <div>
            <div className={classes.root}>
                <Card className={classes.root}>
                    <CardContent>
                    <div>
                        <h1>Estação Metereológica</h1>
                        <p>Cadastre novos dados </p>
                    <TextField
                        id="outlined-full-width"
                        label="Estacao_id"
                        name="estacao_id" onChange={(e) =>{setEstacao_id(e.target.value);}}
                        style={{ margin: 20 }}
                        placeholder="estacao_id"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Temperatura"
                        name="temperatura" onChange={(e) =>{setTemperatura(e.target.value);}}
                        style={{ margin: 20 }}
                        placeholder="temperatura"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Velocidade_vento"
                        name="velocidade_vento" onChange={(e) =>{setVelocidade_vento(e.target.value);}}
                        style={{ margin: 20 }}
                        placeholder="velocidade_vento"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Umidade"
                        name="umidade" onChange={(e) =>{setUmidade(e.target.value);}}
                        style={{ margin: 20 }}
                        placeholder="umidade"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Data"
                        name="data" onChange={(e) =>{setData(e.target.value);}}
                        style={{ margin: 20 }}
                        placeholder="data"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                        <Button variant="contained" className={classes.button} type="submit" 
                        onClick={submit}>Inserir</Button>
                    </div>
            </CardContent>
        </Card>
        </div>
     </div>   
    );
}
export default App;