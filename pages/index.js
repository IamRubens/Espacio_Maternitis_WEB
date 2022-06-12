import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'

import styles from "../styles/Index.module.css"
import Layout from "../components/Layout"
import Router from "next/dist/server/router"

export default function Home() {

  return (
    <Layout
      title='Index'
    >
      <div className={styles.contenedor} />

      <section className={styles.index_section}>
        <Image className={styles.logo_image} layout="intrinsic" width={500} height={350} src='/img/complete_logo_white.png' alt='Logo completo Espacio Matenitis' />
      </section>
        <div className={styles.glass}>
          <section className={`${styles.section__index} ${styles.h1_izq}`}>
            <h1>¿Que es?</h1>
            <div className={styles.div_que_es}>
              <p>Es un concepto que llevó a un lugar!<br />
              Defino Maternitis como «el proceso que transforma
              a una mujer mientras gesta, cría y cuida, con amor y placer».<br />
              Y, ¿de donde nace Espacio Maternitis?
              </p>
              <Link className={styles.index_botton} href="/que_es">Descubrelo</Link>
            </div>
          </section>
          <section className={`${styles.section__index} ${styles.h1_der}`}>
            <div className={styles.title_quien_soy}>
              <h1>¿Quien soy?</h1>
            </div>
            <div className={styles.div_quien_soy}>
              <div>
                <Image layout="intrinsic" width={500} height={700} src='/img/foto_quien_soy.jpg' alt='Claudia Prado, fundadora de Espacio Maternitis' />
              </div>
              <div className={styles.texto_quien_soy}>
                <p>
                Hola! Mi nombre es Claudia,<br />
                Soy la creadora y directora de
                ESPACIO MATERNITIS,
                y mamá de dos, perra y humana.

                He caminado mucho antes de llegar aquí,<br />
                ¿Quieres saber un poco más sobre mi recorrido?
                </p>
                <Link href="/quien_soy">Conóceme</Link>
              </div>
            </div>
          </section>
          <section className={`${styles.section__index} ${styles.h1_izq}`}>
            <h1>¿Te cuento algo?</h1>
            <div className={styles.div_te_cuento}>
              <div className={styles.texto_te_cuento}>
                <p>
                Este es mi GRAN secreto!<br />
                Escribir es mi terapia, mi don y mi calma.
                Aquí encontrarás información y reflexión.<br /><br />
                Aportar para ayudar.
                </p>
                <Link href="/te_cuento">Leer Blog</Link>
              </div>
              <div>
                <Image layout="intrinsic" width={400} height={500} src='/img/te_cuento.svg' alt='Claudia Prado, fundadora de Espacio Maternitis' />
              </div>
            </div>
          </section>


        </div>
    
    
    </Layout>
  )
}
