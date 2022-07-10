import { useState } from 'react'

import styles from "../styles/Circulo.module.css"

import ModalActividades from '../components/ModalActividades'
import Layout from "../components/Layout"

const Circulo_grandes = () => {

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
            <h1>Circulo de crianza infantil</h1>
            <p>Somos conscientes de que con el desarrollo de nuestras criaturas se complica el poder mantener una conversación, relajarse y desconectar sin sentir culpa, así que hemos combinado nuestra necesidad y su necesidad.</p>
            <p>El círculo de crianza para madres con criaturas de +18m se adapta, por eso tenemos la fortuna de contar con Nerea, educadora, luz para nosotras y la infancia, que estará en cada círculo acompañando a nuestras criaturas.</p>
            <p>El círculo se transforma para resultar en un grupo de juego, donde se hace compatible y real el esparcimiento de las madres y sus criaturas en un ambiente de armonía.</p>
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
                api='grandes-22-23s'
            />
            }
    </Layout>
    )
}

export default Circulo_grandes