import { useState } from 'react'

import styles from '../../styles/Taller.module.css'

import Layout from "../../components/Layout"
import ModalTaller from '../../components/ModalTaller'

const EntradaTaller = ({ent}) => {

    const entrada = ent.data[0]
    const { titulo, descripcion_corta, descripcion, instructor, descripcion_instructor, entradas_disponibles, fecha_inicio, fecha_fin, localizacion, localizacion_altitud, localizacion_longitud, plazas, precio, redes_instructor_1, redes_instructor_2, codigo } = entrada.attributes
    const id = entrada.id
    const imagen = entrada.attributes.cartel.data.attributes.url

    const [ modal, setModal ] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)

    const handleInscripcion = () => {
        setModal(true)
        setTimeout(() => {
            setAnimarModal(true)
        }, 500)
    }

    return (
        <Layout
            title={titulo}
        >
            <div className='margin_header'>
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

            <div className='div__button'>
                <a
                    onClick={handleInscripcion}
                >Reservar</a>
            </div>
            </div>

            {modal &&
            <ModalTaller
                curso={titulo}
                id={id}
                codigo={codigo}
                precio={precio}
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
            />
            }


        </Layout>
    )
}


export async function getServerSideProps({query: { url }}) {
    const urlB = `${process.env.API_URL}/api/tallers?populate=*&filters[cartel_id][$eq]=${url}`
    const respuesta = await fetch(urlB)
    const ent = await respuesta.json()

    console.log(ent)

    return {
        props: {
            ent
        }
    }
}

/*
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
} */

export default EntradaTaller