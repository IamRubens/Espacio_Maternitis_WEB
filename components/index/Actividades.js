import Image from "next/image"
import Link from "next/link"

import styles from "../../styles/Index.module.css"

const Actividades = () => {
    return (
        <section className={`${styles.section__index} ${styles.actividades}`}>
            <div className={styles.right_tittle}>
                <h1 className={`${styles.h1_der} ${styles.section__index__title}`}>Actividades</h1>
            </div>
            <div className={styles.section__cotent}>
                <div className={styles.circulo_crianza}>
                    <Image layout="intrinsic" width={400} height={400} src='/img/circulo-de-crianza.jpg' alt='Circulo de Crianza, Espacio Maternitis' />
                    <div>
                        <h3>Circulo de Crianza</h3>
                        <p>Si estas embarazada o eres madre y tienes hijos de entre 0 y 3 años, Bienvenida al Circulo!<br />
                        El círculo de crianza es un espacio de seguridad para las madres y sus criaturas, en donde ellas juegan y nosotras, básicamente, hablamos.
                        </p>
                    </div>
                </div>
                <div className={styles.grupo_juego}>
                    <Image layout="intrinsic" width={400} height={400} src='/img/grupo-de-juego.jpg' alt='Grupo de juego, Espacio Maternitis' />
                    <div>
                        <h3>Grupo de juego Itinerante</h3>
                        <p>TODO
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Actividades