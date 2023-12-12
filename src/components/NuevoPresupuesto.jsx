import React, { useState } from 'react'
import Mensaje from './Mensaje'


const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState("")

    const handlePresupuesto = (e) => {
        e.preventDefault()
        if (!presupuesto || presupuesto < 1) {
            setMensaje("El presupuesto es invalido")
            return
        }
        setMensaje('')
        setIsValidPresupuesto(true)
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className="campo">
                    <label htmlFor="">Definir presupuesto</label>
                    <input 
                        className='nuevo-presupuesto' 
                        placeholder='añade tu presupuesto' 
                        type="number"
                        value={presupuesto}
                        onChange={ e => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input 
                    type="submit" 
                    value="Añadir" 
                />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto
