import styles from '../../styles/Taller.module.css'

import Layout from "../../components/Layout"

const EntradaTaller = ({ent}) => {

    console.log(ent.attributes)
    const { titulo, descripcion_corta, descripcion, instructor, descripcion_instructor, entradas_disponibles, fecha_inicio, fecha_fin, localizacion, localizacion_altitud, localizacion_longitud, plazas, precio, redes_instructor_1, redes_instructor_2 } = ent.attributes
    const imagen = ent.attributes.cartel.data.attributes.url

    return (
        <Layout
            title={titulo}
        >
            <h1 className={styles.titulo}>{titulo}</h1>
            <h3 className={styles.subtitulo}>{descripcion_corta}</h3>
            {fecha_fin ? 
            <>
                <p className={styles.taller_fecha}>Comienzo: {fecha_inicio}</p>
                <p className={styles.taller_fecha}>Finalización: {fecha_fin}</p>
            </>
            :
                <p className={styles.taller_fecha}>Fecha: {fecha_inicio}</p>
            }
            <p>Instructor: {instructor}</p>
            <p>{descripcion}</p>
        </Layout>
    )
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/api/tallers?fields=*&populate=cartel`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    const ent = (entradas.data)

    const paths = ent.map(entrada => ({
        params: {url: entrada.attributes.cartel_id}
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: { url }}) {
    const urlB = `${process.env.API_URL}/api/tallers?populate=*&filters[cartel_id][$eq]=${url}`
    const respuesta = await fetch(urlB)
    const entrada = await respuesta.json()
    const ent = entrada.data

    return {
        props: {
            ent: ent[0]
        }
    }
}

export default EntradaTaller