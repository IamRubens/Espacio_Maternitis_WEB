import { useState } from 'react'

import styles from '../styles/Grupo_juego.module.css'

import Layout from "../components/Layout"
import ModalActividades from '../components/ModalActividades'

const Grupo_juego = () => {

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
            title={'Grupo de Juego'}
        >
        <div id='titleJob' className={`margin_header ${modal ? 'openModal' : ''}`}>
            <section className={`${styles.presentacion}`}>
                <p>
                Reforzar nuestro vínculo y el vínculo de nuestras criaturas con la TIERRA jugando libres, en libertad, pero siempre en espacios seguros y en compañía. <br />
                Porque cuando AMAS algo, el respeto, la necesidad de cuidado y la admiración son espontáneas. Pero para amar hay que conocer, y para conocer hay que experimentar.<br />
                Bienvenido al GRUPO DE JUEGO
                </p>
            </section>
            <div className={styles.descripcion}>
                <p>
                Hay cientos de estudios que demuestran que estar en contacto directo con la naturaleza favorece en todos los ámbitos de la vida.
                </p>
                <p>
                Y hay otros tantos que afirman que aquellas personas que más horas han pasado jugando, y sobre todo, que más tiempo han estado expuestos al aire libre, más facilidad tienen a la hora de desarrollar  habilidades y autonomía, mejor sistema inmune, aumenta la creación de vínculos saludables… y es que hay mejor forma de aprender que jugando?
                </p>
                <p>
                Si las madres, padres, abuelos o tutores ya pasan tiempo al aire libre, pueden pasar más. Podemos convertirnos en observadores de pájaros, pescadores, constructores de refugios, cazadores de insectos, excursionistas o jardineros.
                </p>
                <h3>
                Cambiemos el paradigma; juguemos con barro.
                </h3>
                <p>
                Experimentas con nosotras?
                </p>
            </div>
            <div className='div__button'>
                <a
                    onClick={handleInscripcion}
                    href='#titleJob'
                >Reservar</a>
            </div>
            </div>
            {modal &&
            <ModalActividades
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                info='Informacion Grupo de Juego'
                api='grupo-juego22-23s'
            />
            }
        
        </Layout>
    )
}

export default Grupo_juego