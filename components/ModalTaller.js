import { useState } from 'react'
import Image from 'next/image'

import styles from '../styles/Taller.module.css'

const ModalTaller = ({curso, id, codigo, precio, setModal, animarModal, setAnimarModal}) => {

    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [nPersonas, setNPersonas] = useState('1')

    const values = {
        nombre,
        apellidos,
        telefono,
        correo,
        nPersonas,
        curso: codigo,
        codigo: id,
    }

    const [errorValidacion, setErrorValidacion] = useState(false)
    const [enviado, setEnviado] = useState(false)
    const [resultInscripcion, setResultInscripcion] = useState({})

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    const postInscripcion = async (valores) => {
        try {
            let respuesta
            const url = `https://maternitis.herokuapp.com/api/inscripciones`
            respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ data: valores}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const resultado = await respuesta.json()
            setEnviado(true)
            setResultInscripcion({
                titulo: 'RESERVA REALIZADA CON EXITO',
                texto: 'En breves momentos recibiras un correo electrónico con las instrucciones para realizar el pago.',
                nota: 'NOTA: Si no recibe el correo, revise la bandeja de SPAM de su buzón de correo electrónico. Si el problema persiste pongase en contacto a través del teléfono: 655-281-188'
            })
        } catch (error) {
            setEnviado(true)
            setResultInscripcion({
                titulo: 'ERROR AL REALIZAR LA RESERVA',
                texto: 'Hemos encontrado un problema al realizar la reserva.',
                nota: 'Intentelo de nuevo mas tarde. Si el problema persiste pongase en contacto a través del teléfono: 655-281-188'
            })
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

        if([nombre, apellidos, telefono, correo, nPersonas].includes('')) {
            setErrorValidacion(true)

            setTimeout(() => {
                setErrorValidacion(false)
            }, 3000)
            return;
        }
        postInscripcion(values)
    }

    return (
        <div className={styles.modal}>
            <div className={styles.cerrar_modal}>
                <Image 
                    width={50}
                    height={50}
                    src={'/img/cerrar.svg'}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>
            {enviado ?
                <div className={styles.reserva}>
                    <h3>{resultInscripcion.titulo}</h3>
                    <p>{resultInscripcion.texto}</p>
                    <p>{resultInscripcion.nota}</p>
                    <button 
                        onClick={ocultarModal}
                    >Aceptar</button>
                </div>
            :
                <form
                    onSubmit={ values => handleSubmit(values)}
                    className={`${styles.formulario} ${animarModal ? styles.animar : styles.cerrar}`}
                >
                    <legend>Inscripción {curso}</legend>
                    {errorValidacion && 
                        <div className={`${styles.alerta} ${styles.error}`}>
                        Todos los campos son obligatorios
                        </div>
                    }
                    <div className={styles.campo}>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            id='nombre'
                            type="text"
                            placeholder='Introduzca el Nombre'
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>
                    <div className={styles.campo}>
                        <label htmlFor="apellidos">Apellidos</label>
                        <input 
                            id='apellidos'
                            type="text"
                            placeholder='Introduzca los apellidos'
                            value={apellidos}
                            onChange={ e => setApellidos(e.target.value)}
                        />
                    </div>
                    <div className={styles.campo}>
                        <label htmlFor="telefono">Telefono</label>
                        <input 
                            id='telefono'
                            type="number"
                            placeholder='Introduzca un numero de telefono'
                            value={telefono}
                            onChange={ e => setTelefono(e.target.value)}
                        />
                    </div>
                    <div className={styles.campo}>
                        <label htmlFor="email">Correo Electrónico</label>
                        <input 
                            id='email'
                            type="email"
                            placeholder='Introduzca el correo electrónico'
                            value={correo}
                            onChange={ e => setCorreo(e.target.value)}
                        />
                    </div>
                    <div className={styles.campo}>
                        <label htmlFor="nPersonas">Numero de Personas</label>

                        <select 
                            name="" 
                            id="nPersonas"
                            value={nPersonas}
                            onChange={ e => setNPersonas(e.target.value)}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div>
                        <p className={styles.precio}>{`Total a pagar: ${precio * parseInt(nPersonas)}€`}</p>
                    </div>
                    <input 
                        className={styles.submit}
                        type="submit" 
                        value="Enviar"
                    />
                </form>
            }
        </div>
    )
}

export default ModalTaller