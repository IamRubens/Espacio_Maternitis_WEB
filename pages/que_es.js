import Image from "next/image"

import styles from '../styles/QueEs.module.css'

import Layout from "../components/Layout"

const que_es = () => {
    return (
        <Layout
            title={'Que es'}
        >
            {/* <h1 className={styles.title}>Que es</h1> */}
            <div className={`${styles.presentacion}`}>                
                <div className={styles.img}>
                <Image layout="intrinsic" width={500} height={500} src='/img/espacio_maternitis_que_es_lago.jpg' alt='La casa del Lago' />
                </div>
                <p className={styles.texto}>
                Espacio Maternitis es un lugar de encuentro,
                desahogo, apoyo y diversión. <br />
                Es un rincón donde cobijarnos construído con amor y esfuerzo, porque el mundo es hostil y debemos cuidarnos, no para cuidar sino para vivir. <br />
                Espacio Maternitis nace de la sombra, del encuentro con MI sombra durante los primeros meses en aguas puerperales. <br />
                Porque sólo desde la sombra podemos ver la luz.
                </p>
            </div>
            <div className={styles.definicion}>
                <p>
                Defino Maternitis, como &laquo;el proceso que transforma a una mujer, mientras gesta cría y cuida, con amor y placer&raquo;, porque transitamos un proceso desconocido y transformador a todos los niveles. <br />
                Nuestro cuerpo despliega una metamorfosis para generar vida.
                Nuestro órganos, nuestro cerebro y nuestro esqueleto cambian y a la hora de parir, nos abrimos literalmente encontrándonos con la muerte de frente, desconectamos del mundo conocido y renacemos convertidas en dos. <br />
                Pasamos de ser una persona con dos corazones a dos seres individuales unidos eternamente. <br />
                Es imposible que no se re-evolucione nuestro sentir
                y nuestra forma de ver la vida.
                </p>
                <div className={styles.img}>
                    <Image layout="intrinsic" width={500} height={500} src='/img/espacio_maternitis_que_es_barriga.jpg' alt='Mujer embarazada' />
                </div>
            </div>
            <div className={styles.palabra}>
                <p>
                Y si, Maternitis es la palabra. <br />
                Es una sátira a ese comentario que tan gratuítamente recibimos las madres cuando nos llaman, cuando  nos lloran, cuando no quieren a nadie más, y como que su reacción, molesta, cual enfermedad infecciosa con necesidad de valoración médica y posterior tratamiento antibiótico. <br />
                Qué es la «mamitis»? Realmente nadie se plantea qué les pasa para comportarse así?
                Yo si me lo pregunté y hallé la respuesta. GUAU, cariño, aquí estoy. <br />
                Ahí comenzó el cambio de mirada, a través y gracias a ella, mi hija, por eso ahora hablo de redescubrir al ser humano como especie mamífera, porque siento que estamos muy lejos de lo que somos en esencia y en realidad, que sencillo podría ser.
                </p>
                <h2>Asì que, què es Espacio Maternitis?</h2>
                <p>
                Es un lugar de encuentro, en el que hallaréis cobijo, amor e ilusión por la vida,
                construido para toda persona que se replantee la forma en la que se supone deben ser las cosas.<br />
                Hemos creado diversas actividades que iremos ofreciendo a lo largo del año, cuando sintamos que es el momento de empezar cada una de ellas, sin forzar, sin fechas, sin prisas. <br />
                Porque estamos gestando el cambio, y va desarrollándose lentamente, con calma y amor.
                </p>
                <p className={styles.bienvenida}>Bienvenida a ESPACIO MATERNITIS.</p>
                <div className={styles.imagen_final}>
                    <Image layout="intrinsic" width={500} height={800} src='/img/espacio_maternitis_que_es_colo.jpg' alt='Mujer embarazada' />
                </div>
            </div>
        </Layout>
    )
}

export default que_es