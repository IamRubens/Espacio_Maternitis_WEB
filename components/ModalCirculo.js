import { useState } from 'react'
import Image from 'next/image'

import styles from '../styles/Taller.module.css'

const ModalCirculo = ({setModal, animarModal, setAnimarModal}) => {

    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [nHijos, setNHijos] = useState('1')
    const [edades, setEdades] = useState('')

    const values = {
        nombre,
        apellidos,
        telefono,
        correo,
        nHijos,
        edades,
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
            const url = ``
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

        if([nombre, apellidos, telefono, correo, nHijos, edades].includes('')) {
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
                    <legend>Inscripción Cicrulo de Crianza</legend>
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
                        <label htmlFor="nHijos">Numero de Hij@s</label>
                        <select 
                            name="" 
                            id="nHijos"
                            value={nHijos}
                            onChange={ e => setNHijos(e.target.value)}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className={styles.campo}>
                        <label htmlFor="edades">Edad de los hij@s</label>
                        <input 
                            id='edades'
                            type="text"
                            placeholder='Ej: 8 meses, 4 años, 1 año y medio..'
                            value={edades}
                            onChange={ e => setEdades(e.target.value)}
                        />
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

export default ModalCirculo