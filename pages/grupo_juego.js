import styles from '../styles/Grupo_juego.module.css'

import Layout from "../components/Layout"

const grupo_juego = () => {
    return (
        <Layout
            title={'Grupo de Juego'}
        >
            <div className="margin_header">
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
            <div className={styles.descripcion}>
                <p>
                Dicen que el modo más sencillo de conectar a nuestras criaturas con la naturaleza es reconectándonos nosotras mismas.
                </p>
                <p>
                Si los niños y niñas sienten el entusiasmo auténtico del adulto, querrán emular ese interés, aún cuando finjan perderlo en la adolescencia, la semilla estará sembrada.
                </p>
                <p>
                Porque por mucho que nos alejemos de ella en nuestro día a día, y nos pensemos por separado, en la naturaleza estamos, de ella vivimos y de ella somos. Aunque la sintamos lejos, está en nosotras.
                </p>
                <p>
                Hay cientos de estudios que demuestran que estar en contacto directo con la naturaleza favorece en todos los ámbitos de la vida; en el desarrollo de habilidades y autonomía, en el refuerzo del sistema inmune, en la creación de vínculos, en la calma..
                </p>
                <p>
                Si las madres, padres, abuelos o tutores ya pasan tiempo al aire libre, pueden pasar más: podemos convertirnos en observadores de pájaros, pescadores, constructores de refugios, cazadores de insectos, excursionistas o jardineros.
                </p>
                <p>
                Queremos reforzar nuestro vínculo y el vínculo de nuestras criaturas jugando libres, en libertad, pero siempre en espacios seguros y en compañía.
                </p>
                <p>
                Porque cuando AMAS algo, el respeto, la necesidad de cuidado y la admiración son espontáneas. Pero para amar hay que conocer, y para conocer hay que experimentar,.
                </p>
                <p>
                Cambiemos el paradigma; juguemos con barro.
                </p>
                <p>
                Experimentas con nosotras?
                </p>
            </div>






            </div>
        </Layout>
    )
}

export default grupo_juego