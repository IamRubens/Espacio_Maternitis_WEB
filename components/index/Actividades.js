import Image from "next/image"
import Link from "next/link"

import styles from "../../styles/Index.module.css"

import ProximosTalleres from "./ProximosTalleres"

const Actividades = ({talleres}) => {
    return (
        <section className={`${styles.section__index} ${styles.actividades}`}>
            <div className={styles.right_tittle}>
                <h1 className={`${styles.h1_der} ${styles.section__index__title}`}>Que hacemos</h1>
            </div>
            <div className={styles.section__cotent}>
                <div className={styles.circulo_crianza}>
                    <div className={styles.actividad__imagen}>
                    <Image layout="intrinsic" width={600} height={600} src='/img/circulo-de-crianza.jpg' alt='Circulo de Crianza, Espacio Maternitis' />
                    </div>
                    <div>
                        <h3>Circulo de Crianza</h3>
                        <p>Si estas embarazada o eres madre y tienes hijos de entre 0 y 3 años, Bienvenida al Circulo!<br />
                        El círculo de crianza es un espacio de seguridad para las madres y sus criaturas, en donde ellas juegan y nosotras, básicamente, hablamos.
                        </p>
                    </div>
                </div>
                <div className={styles.grupo_juego}>
                    <div className={styles.actividad__imagen}>
                        <Image layout="intrinsic" width={1000} height={1000} src='/img/grupo-de-juego.jpg' alt='Grupo de juego, Espacio Maternitis' />
                    </div>
                    <div>
                        <h3>Grupo de juego Itinerante</h3>
                        <p>Aliquam nec quam lacus. Nulla quis luctus ipsum. Nullam hendrerit turpis nec ornare ultrices. Suspendisse potenti. Mauris at nunc at mauris faucibus aliquam vel at dui. Phasellus in dui ac neque feugiat varius. In vel nisl lobortis massa facilisis convallis. Ut sollicitudin sem vitae hendrerit sodales.
                        </p>
                    </div>
                </div>
                <div className={styles.talleres}>
                    <h3>Proximos Talleres...</h3>
                    <div>
                        <ProximosTalleres 
                            talleres={talleres}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Actividades