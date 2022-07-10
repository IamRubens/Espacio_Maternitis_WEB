import { useState } from 'react'

import styles from "../styles/Circulo.module.css"

import ModalActividades from '../components/ModalActividades'
import Layout from "../components/Layout"

const Circulo_peques = () => {

    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)

    const handleInscripcion = () => {
        setModal(true)
        setTimeout(() => {
            setAnimarModal(true)
        }, 500)
    }

    return (
        <Layout
        title={'Circulo de Crianza'}
    >
        <div className={`margin_header ${modal ? 'openModal' : ''}`}>
            <h1>Circulo de crianza bebés</h1>
            <p>El sentimiento más común durante los primeros meses de vida en la madre de un bebé, es la soledad.</p>
            <p>Y como no debe ser lo normal, ni es justo, queremos cambiarlo.</p>
            <p>¿Qué hacemos?</p>
            <p>Hablar, escuchar, sostener, acompañar, abrazar.</p>
            <p>Hablamos de ti, de mí, de cada una de las participantes y de su experiencia. </p>
            <p>Hablamos del embarazo, del parto, de nuestras criaturas, de movimiento libre, de BLW, de cuentos, canciones, de sexualidad, de pareja, de gestionar la relación entre hermanxs. Hablamos de lo que surge, o de lo que se propone.</p>
            <p>Reflexionamos juntas. <br />
            Sin juicio, con amor, en un lugar seguro para todas las participantes, tengan la edad que tengan.</p>
            <p>Y también nos nutrimos, claro, porque toda conversación fluye mejor con un café (aunque sea descafeinado) o una infusión y algo que lo acompañe.</p>
            <h2>¿Cuándo?</h2>
            <p>Nos reunimos un día a la semana, durante una hora y media.</p>
            <p>Llegas cuanto puedes, te vas cuando lo necesitas.</p>
            <p></p>
            <p>Tú decides cómo acompañarnos y durante cuánto tiempo.</p>
            
            <div className='div__button'>
                <div>
                    <a
                        onClick={handleInscripcion}
                        href='#title'
                    >Reserva</a>
                    <p>Nos pondremos en contacto contigo</p>
                </div>
            </div>
        </div>
        {modal &&
            <ModalActividades
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                info='Inscripcion Circulo de Crianza'
                api='peques-22-23s'
            />
            }
    </Layout>
    )
}

export default Circulo_peques