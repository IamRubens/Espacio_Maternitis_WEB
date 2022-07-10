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
                        <p>Si sientes que ha llegado el momento de volver, que ya estás preparada para formar parte de nuevo de este mundo rápido, pero te apetece tener un lugar en el que respirar y desahogar, en el que compartir y abrazar, en el que nutrir tu cuerpo y tu alma con mujeres en el mismo momento vital, un refugio, eres bienvenida
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
                        <p>En la naturaleza estamos, de ella vivimos, de ella somos y de ella depende el futuro de la vida, por eso en ella ansiamos estar. 
                        <br />
                        El grupo de juego en la naturaleza es un espacio donde aprender, experimentar y disfrutar de la vida al aire libre en familia. 
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