import { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/Circulo.module.css'

import Layout from '../components/Layout'
import ModalActividades from '../components/ModalActividades'
import Map from '../components/Map'

const Circulo_crianza = () => {

    return (
        <Layout
            title={'Circulo de Crianza'}
        >
            <div id='title' className={`margin_header`}>
            <section className={styles.presentacion}>
                <p>
                Ya no eres la misma, y has dejado de ir sola, por eso te invito a caminar con nosotras! <br/>
                Seas como seas, hagas lo que hagas, o pienses como pienses, has gestado y has dado a luz de la forma que fuere a una criatura, algo que transforma a niveles insospechados física y mentalmente.
                </p>
            </section>
            <section className={styles.descripcion}>
                <p>
                Nuestro círculo de crianza es un espacio de seguridad para las madres y sus criaturas, en donde ellas se esparcen e interactúan en un lugar adaptado a su etapa de desarrollo, y nosotras, básicamente, hablamos.
                </p>
                <p>
                Nosotras hablamos porque es nuestra forma de comunicarnos, para cuidarnos, para entender, para desahogarnos y poder respirar.
                </p>
                <p>
                Hablamos porque compartimos más de lo que nos diferencia, porque son pocos los lugares en donde poder SER, sin juicio, sin miedo.
                </p>
                <p>
                Y hablamos de todo, o de nada. Porque a veces simplemente con estar es suficiente.
                </p>
                <p>
                Como especie tenemos una necesidad intrínseca de vivir en comunidad, necesitamos convivir con personas en el mismo momento vital.
                </p>
                <p>
                Y aunque nuestros hijos e hijas están en el centro, te mereces cuidarte y estar bien para vivir.
                </p>
                <p>
                Espacio Maternitis, un lugar donde amar, un refugio.Aquí todas somos igual de valiosas; somos madres, amigas y compañeras.
                </p>
                <p>
                Tenemos derecho a vivir esta etapa con placer, y no por complacer. 
                </p>
                <h2 className={styles.proporciona}>¿Qué nos proporciona el Círculo?</h2>
                <p> <span>✓</span> Cuidado mutuo</p>
                <p><span>✓</span> Escucha activa</p>
                <p><span>✓</span> Acompañamiento respetuoso</p>
                <p><span>✓</span> Nos nutre internamente, a través del alimento que allí ofrecemos, y con la energía que respiramos</p>
                <p><span>✓</span> Nos relacionamos, tranquilizamos, abrazamos, respetamos, REvalorizamos</p>
                <p><span>✓</span> Un lugar donde estar, cálido, confortable para todas las personas.</p>
            </section>
            <p className={styles.explicacion_edades}>Hemos propuesto dos grupos divididos por edades:</p>
            <section className={styles.cuando_cuanto}>
                <Link href={'/circulo_peques'}>
                    <a>
                        <div className={styles.edades}>
                            <h2>De 0 a 18 meses</h2>
                            <div className={styles.peques}/>
                        </div>

                    </a>
                </Link>

                <Link href={'/circulo_grandes'}>
                    <a>
                        <div className={styles.edades}>
                            <h2>Mas de 18 meses</h2>
                            <div className={styles.grandes}/>
                        </div>

                    </a>
                </Link>
            </section>
            <section className={styles.localizacion}>
                <div>
                    <h2>¿Donde estamos?</h2>
                    <p>
                    Nos reunimos en la casa de cultura de Santo Tomé de Piñeiro, a 20 minutos exactos del centro de Pontevedra, a 12 minutos de Moaña, a 9 minutos de Marin, a 3 minutos de Seixo… porque no hay que buscar donde aparcar amiga, sólo llegar.
                    </p>
                    <p>
                    Eso si, llegas cuando puedes, te vas cuando lo necesitas!
                    </p>
                </div>
                <div className={styles.mapa}>
                    <h1>MAPA</h1>
                </div>
            </section>
            </div>
        </Layout>
    )
}

export default Circulo_crianza