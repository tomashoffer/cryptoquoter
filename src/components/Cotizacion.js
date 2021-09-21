import React from 'react';

import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Cotizacion = ({resultado}) => {
    // Esto sirve para que no se ejecute cuando no hay resultado
    if(Object.keys(resultado).length === 0) return null;
    return ( 
        <div class="row">
    <div class="col s12">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <ResultadoDiv>
                    <Precio>The price is: <span>{resultado.PRICE}</span></Precio>
                    <Info>- The highest price of the day: <span>{resultado.HIGHDAY}</span></Info>
                    <Info>- The lowest price of the day: <span>{resultado.LOWDAY}</span></Info>
                    <Info>- Variation of the last 24 hours: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
                    <Info>- Last update: <span>{resultado.LASTUPDATE}</span></Info>
                </ResultadoDiv>
            </div>
        </div>
    </div>
</div>
     );
}
 
export default Cotizacion;


