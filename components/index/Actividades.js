import Image from "next/image"
import Link from "next/link"

import styles from "../../styles/Index.module.css"

import ProximosTalleres from "./ProximosTalleres"
import Button from "../Button"

const Actividades = ({talleres}) => {
    return (
        <section className={`${styles.section__index} ${styles.actividades}`}>
            <div className={styles.right_tittle}>
                <h1 className={`${styles.h1_der} ${styles.section__index__title}`}>Que hacemos</h1>
            </div>
            <div className={styles.section__cotent}>
                <div className={styles.box_actividad}>
                    <Link href={'/circulo_crianza'}>
                        <a className={styles.radius_50}>
                            <div className={styles.actividad__imagen}>
                                <Image layout="intrinsic" width={600} height={600} src='/img/circulo-de-crianza.jpg' alt='Circulo de Crianza, Espacio Maternitis' />
                            </div>
                        </a>
                    </Link>
                    <div>
                        <Link href={'/circulo_crianza'}>
                            <a>
                                <h3>Circulo de Crianza</h3>
                            </a>
                        </Link>
                        <p>Si estas embarazada o eres madre y tienes hijos de entre 0 y 3 años, Bienvenida al Circulo!<br />
                        El círculo de crianza es un espacio de seguridad para las madres y sus criaturas, en donde ellas juegan y nosotras, básicamente, hablamos.
                        </p>
                    </div>
                </div>
                <div className={styles.box_actividad}>
                    <Link href={'/grupo_juego'}>
                        <a className={styles.radius_50}>
                            <div className={styles.actividad__imagen}>
                                <Image layout="intrinsic" width={1000} height={1000} src='/img/grupo-de-juego.jpg' alt='Grupo de juego, Espacio Maternitis' />
                            </div>
                        </a>
                    </Link>
                    <div>
                        <Link href={'/grupo_juego'}>
                            <a>
                                <h3>Grupo de juego en la Naturaleza</h3>
                            </a>
                        </Link>
                        <p>Espacio Maternitis se abre a la naturaleza, no sólo a la naturaleza interna, sino al mundo. <br />
                        Proponemos una actividad para jugar, experimentar y descubrir la vida fuera de casa, en familia, en la naturaleza.
                        </p>
                    </div>
                </div>
                <div>
                    <h3>Proximos Talleres...</h3>
                    <div>
                        <ProximosTalleres 
                            all={'no'}
                            talleres={talleres}
                        />
                    </div>
                    <Button 
                        path={'/talleres'}
                        position={'center'}
                        text={'Ver Talleres'}
                    />
                </div>
            </div>
        </section>
    )
}

export default Actividades