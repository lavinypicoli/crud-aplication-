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

    const [estacao_id, setEstacao_id] = useState("");
    const [temperatura, setTemperatura] = useState("");
    const [velocidade_vento, setVelocidade_vento] = useState("");
    const [umidade, setUmidade] = useState("");
    const [data, setData] = useState("");
    const [dadosList, setDadosList] = useState([]);

    useEffect(() =>{
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setDadosList(response.data);
        });
    }, []);

    const submit = () =>{
        Axios.post('http://localhost:3001/api/insertDados', {
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
    const deleteDados = () => {
        Axios.post('http://localhost:3001/api/delete/${id}', {
            estacao_id: estacao_id,
        });
    };

    return (
        <div className={classes.root}>
            <Card className={classes.root}>
                <CardContent>
                    <div>
                        <h1>Estação Metereológica</h1>
                        <p>Insira novos dados </p>
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
                        <Button variant="contained" className={classes.button} type="submit" onClick={submit}>Inserir</Button>
                    </div>

                </CardContent>
            </Card>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableCell align="left">Estacao_Id</TableCell>
                        <TableCell align="left">Temperatura</TableCell>
                        <TableCell align="left">Velocidade do vento</TableCell>
                        <TableCell align="left">Umidade</TableCell>
                        <TableCell align="left">Data</TableCell>
                        <TableCell align="left">Action</TableCell>
                        <TableCell align="left">Action</TableCell>
                    </TableHead>

                    {dadosList.map((dados) => (
                        <TableBody>
                            {console.log(dados)}
                            <TableCell align="left">{dados.estacao_id}</TableCell>
                            <TableCell align="left">{dados.temperatura}</TableCell>
                            <TableCell align="left">{dados.velocidade_vento}</TableCell>
                            <TableCell align="left">{dados.umidade}</TableCell>
                            <TableCell align="left">{dados.data}</TableCell>
                            <TableCell>
                                <Button variant="contained" className={classes.deleteButton} onClick={deleteDados}> Delete </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" className={classes.updateButton}> Update </Button>
                            </TableCell>
                        </TableBody>
                    ))}
                </Table>
            </TableContainer>
        </div>
    );
}
export default App;
