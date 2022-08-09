
import useClima from "../hooks/useClima"
import { useState } from 'react'

const Formulario = () => {

    const { busqueda, datosBusqueda, consultarClima } = useClima()
    const [alerta, setAlerta] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta("Todos los campos son obligatiorios")
            return
        }

        setAlerta("")
        consultarClima(busqueda)
    }


    return (
        <div className = "contenedor">

            {alerta && <p>{alerta}</p>}
            <form
                onSubmit = {handleSubmit}
            >
                <div className = "campo">
                    <label htmlFor = "ciudad">Ciudad</label>
                    <input
                        type = "text"
                        id = "ciudad"
                        name = "ciudad"
                        onChange = {datosBusqueda}
                        value = {busqueda.ciudad}
                    />
                </div>

                <div className = "campo">
                    <label htmlFor = "pais">País</label>
                    <select
                        id = "pais"
                        name = "pais"
                        onChange = {datosBusqueda}
                        value = {busqueda.pais}
                    >
                        <option value = "">Seleccione Pais</option>
                        <option value = "US">Estados Unidos</option>
                        <option value = "MX">México</option>
                        <option value = "AR">Argentina</option>
                        <option value = "CO">Colombia</option>
                        <option value = "CR">Costa Rica</option>
                        <option value = "ES">España</option>
                        <option value = "PE">Perú</option>
                    </select>
                </div>

                <input 
                    type = "submit"
                    value = "Consultar Clima"
                />
            </form>
        </div>
    )
}

export default Formulario
