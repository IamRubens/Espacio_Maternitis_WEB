import { useState } from 'react'

import styles from '../styles/Circulo.module.css'

import Layout from '../components/Layout'
import ModalActividades from '../components/ModalActividades'

const Circulo_crianza = () => {

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
            <div id='title' className={`margin_header ${modal ? 'openModal' : ''}`}>
            <section className={`${styles.presentacion}`}>
                <p>
                    Eres madre y tienes hijos o hijas entre 0 y 3 años...<br />
                    BIENVENIDA AL CÍRCULO<br />
                    Si te replanteas la forma en la que deben ser las cosas,<br />
                    Si sientes distinto a cómo te esperabas.<br />
                    Si no le entiendes y te agota, o te agotan.<br />
                    Si estás enfada, o te crees loca.<br />
                </p>
            </section>
            <section className={styles.descripcion}>
                <p>
                Un  círculo de crianza es un espacio de seguridad para las madres y sus criaturas, en donde ellas juegan y nosotras, básicamente, hablamos.
                </p>
                <p>
                Hablamos para cuidarnos, para entender, para desahogarnos y poder respirar.
                Hablamos porque compartimos más de lo que nos diferencia. 
                </p>
                <p>
                Y de qué hablamos?
                Del embarazo, del parto, de la pareja, de sexualidad, de haber perdido un bebé, o dos.
                Hablamos de nuestra madre, de nuestra suegra, de las relaciones en general y su transformación.
                Hablamos de lo que nos pasa, sin filtro y sin juicio.
                </p>
                <p>
                Porque es difícil expresar todo lo que podemos sentir a lo largo de un día y porque tenemos derecho a vivir esta etapa de otra forma. 
                </p>
                <p>
                Con placer, y no complacer.
                </p>
                <p>
                Una actividad donde todas somos igual de valiosas; somos madres, amigas y compañeras.
                </p>
            </section>
            <section className={styles.cuando_cuanto}>
                <div className={styles.cuando}>
                    <h2>Horarios</h2>
                    <p>
                    Nos reunimos un día a la semana durante dos horas,
                    estamos los viernes por la tarde desde las 17:00.
                    </p>
                    <p>
                    Llegas cuando puedes, te vas cuando lo necesitas.
                    Tú decides cómo acompañarnos.
                    </p>
                    <p>
                    Tomamos infusión o café y algo de picar.
                    </p>
                </div>
                <div className={styles.cuanto}>
                    <h2>Precios</h2>
                    <p>La actividad tiene un coste simbólico.</p>
                    <p>Podeis venir un par de sesiones para ver si os encontrais agusto sin coste alguno.</p>
                    <p>El coste por sesion es de 9000€</p>
                </div>
            </section>
            <section className={styles.localizacion}>
                <div>
                    <h2>¿Donde estamos?</h2>
                    <p>
                    Nos reunimos en la casa de cultura de Santo Tomé de Piñeiro. Fácil acceso desde la vía rápida Pontevedra-Bueu, y cerquita de la carretera Marín-Moaña.
                    </p>
                    <p>
                    En paralelo a la zona de playas de Marín
                    </p>
                </div>
                <div className={styles.mapa}>
                    <h1>MAPA</h1>
                </div>
            </section>
            <div className='div__button'>
                <a
                    onClick={handleInscripcion}
                    href='#title'
                >Reservar</a>
            </div>
            </div>
            {modal &&
            <ModalActividades
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                info='Inscripcion Circulo de Crianza'
                api='circulo22-23s'
            />
            }
        </Layout>
    )
}

export default Circulo_crianza