import Image from "next/image"

import styles from "../styles/Index.module.css"
import Layout from "../components/Layout"

import Actividades from "../components/index/Actividades"
import Blog from "../components/index/Blog"
import QueEs from "../components/index/QueEs"

export default function Home({talleres}) {

  return (
    <Layout
      title='Index'
    >
      <div className={styles.contenedor} />

      <section className={styles.main_section}>
        <Image className={styles.logo_image} layout="intrinsic" width={500} height={350} src='/img/complete_logo_white.png' alt='Logo completo Espacio Matenitis' />
      </section>
      
        <div className={styles.glass}>
          <QueEs />
          <Actividades 
            talleres={talleres}
          />
          <Blog />
        </div>

    </Layout>
  )
}


export async function getStaticProps() {
  const url = `${process.env.API_URL}/api/tallers?fields=*&populate=cartel`
  const respuesta = await fetch(url)
  const talleres = await respuesta.json()

  return {
      props: {
          talleres
      }
  }
}