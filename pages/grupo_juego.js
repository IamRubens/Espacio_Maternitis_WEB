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
        <div id='titleJob' className={`margin_header padding_bottom ${modal ? 'openModal' : ''}`}>
            <section className={`${styles.presentacion}`}>
                <p>
                Reforzar nuestro vínculo y el vínculo de nuestras criaturas con la TIERRA jugando libres, en libertad, pero siempre en espacios seguros y en compañía. <br />
                Porque cuando AMAS algo, el respeto, la necesidad de cuidado y la admiración son espontáneas. Pero para amar hay que conocer, y para conocer hay que experimentar.<br />
                Porque la tierra, además de ofrecernos todos sus recursos es el medio perfecto para aprender, aprender todo lo que no interesa, y también a valorar la vida, el tiempo. <br />
                Bienvenido al GRUPO DE JUEGO
                </p>
            </section>
            <div className={styles.descripcion}>
                <p>
                A veces me pregunto cuántas horas pasamos al año entre paredes.
                </p>
                <p>
                Hay cientos de estudios que demuestran que estar en contacto directo diario con la naturaleza favorece en todos los ámbitos de la vida, hay otros tantos, y mucha bibliografía, que habla sobre la infancia y recalca su necesidad urgente de estar al aire libre, de los beneficios que aporta en su desarrollo.
                </p>
                <p>
                Y a mi, sólo se me ocurre crear un conjuro para encantarte y te decidas a acompañarme, os decidáis, a acompañarnos en esta locura enriquecedora y transformadora.
                </p>
                <p>
                Que las paredes de hormigón se volatilicen, <br />
                que el aula sea el mundo, <br />
                que el maestro sea su curiosidad innata y <br />
                nuestra capacidad de acompañar, sostener y confiar sea pura.<br />
                Que la vida real, la natural, se dé paso,<br />
                y que nosotros, reencontremos nuestro lugar en ella.<br />
                </p>
                <p>
                Te unes a ser guardiana del juego? De la vida?
                </p>
            </div>
            <div className='div__button'>
                <a
                    onClick={handleInscripcion}
                    href='#titleJob'
                >Informate</a>
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