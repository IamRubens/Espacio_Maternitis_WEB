import { useState } from 'react'
import Image from 'next/image'

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

    console.log(id)

    return (
        <Layout
            title={titulo}
        >
            <div id='title' className={`margin_header ${modal ? 'openModal' : ''}`}>
            <h1 className={styles.titulo}>{titulo}</h1>
            <h3 className={styles.subtitulo}>{descripcion_corta}</h3>
            <div className={styles.caja_datos}>
                {fecha_fin ? 
                <>
                    <p className={styles.taller_fecha}><span>Comienzo: </span>{fecha_inicio}</p>
                    <p className={styles.taller_fecha}><span>Finalización: </span>{fecha_fin}</p>
                </>
                :
                    <p className={styles.taller_fecha}><span>Fecha: </span>{fecha_inicio}</p>
                }
                <p className={styles.instructor}><span>Instructor: </span>{instructor}</p>
                <p className={styles.price}><span>Precio: </span>{precio}€</p>
            </div>
            <p className={styles.descripcion}>{descripcion}</p>
            <div className={styles.cartel}>
                <Image layout='responsive' width={200} height={270} src={imagen} alt={`Cartel del ${titulo}`} />
            </div>
            {entradas_disponibles && 
                <div className='div__button'>
                    <a
                        onClick={handleInscripcion}
                        href='#title'
                    >Reservar</a>
                </div>
            }
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

    return {
        props: {
            ent
        }
    }
}

export default EntradaTaller