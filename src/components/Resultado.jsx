
import React from 'react'
import useClima from '../hooks/useClima'

const Resultado = () => {

    const { resultado } = useClima()

    // Grados Kelvin
    const kelvin = 273.15

    return (
        <div className = 'contenedor clima'>
            <h2>El clima de {resultado.name} es: </h2>

            <p>
                {parseInt(resultado.main.temp - kelvin)} <span>&#x2103;</span>
            </p>
            <div className = 'min_max'>
                <p>
                    Mín: {parseInt(resultado.main.temp_min - kelvin)} <span>&#x2103;</span>
                </p>
                <p>
                    Máx: {parseInt(resultado.main.temp_max - kelvin)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    )
}

export default Resultado
