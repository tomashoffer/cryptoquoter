import React, { useEffect, useState } from 'react';
import useMoneda from '../hooks/useMoneda';
import useCryptomoneda from '../hooks/useCryptomoneda';
import Error from './Error';
import styled from '@emotion/styled'
import axios from 'axios'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`
const Formulario = ({guardarMoneda, guardarCryptoMoneda}) => {
    // State del listado de Cryptos 
    const [ crypto, guardarCrypto ] = useState([])
    const [ error, guardarError ] = useState(false)


    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'ARS', nombre: 'Argentine peso' },
        { codigo: 'MXN', nombre: 'Mexican Peso' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];
    
// Utilizar useMoneda
const [moneda, SelectMonedas ] = useMoneda('Select Currency', '', MONEDAS);

// Utilizar useCryptomoneda
const [cryptomoneda, SelectCrypto] = useCryptomoneda('Select Crypto', '', crypto)

// Llamado a la API
useEffect(() => {
    const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const resultado = await axios(url);
        guardarCrypto(resultado.data.Data);
    } 
    consultarAPI()
}, [])

const cotizarMoneda = e => {
    e.preventDefault();
    // verificar que no esten los campos vacios 
    if(moneda === '' || cryptomoneda === ''){
        guardarError(true);
        return
    }
    guardarError(false);
    guardarMoneda(moneda);
    guardarCryptoMoneda(cryptomoneda);
}

    return ( 
        <form  
        onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje='All fields are required'/> : null}
            <SelectMonedas/>
            <SelectCrypto/>
            <Boton type="submit" value="Calculate"/>
        </form>
     );
}
 
export default Formulario;