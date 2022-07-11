import Image from "next/image"
import Link from "next/link"

import styles from '../../styles/Index.module.css'

const Taller = ({taller}) => {

    const { titulo, descripcion_corta, fecha_inicio, fecha_fin, cartel_id, entradas_disponibles } = taller.attributes
    const imagen = taller.attributes.cartel.data.attributes.url
    const url = cartel_id


    return (
        <div className={styles.taller}>
            <Link href={`/talleres/${url}`}>
                <a>
                    <h4>{titulo}</h4>
                </a>
            </Link>
            <div className={styles.cartel}>
                <Link href={`/talleres/${url}`}>
                    <a>
                        <Image layout="intrinsic" width={500} height={600} src={imagen} alt={`Imagen taller ${titulo}`} />
                    </a>
                </Link>
            </div>
            <p className={styles.descripcion_corta}>{descripcion_corta}</p>
            {fecha_fin ? 
            <>
                <p className={styles.taller_fecha}>Comienzo: {fecha_inicio}</p>
                <p className={styles.taller_fecha}>Finalización: {fecha_fin}</p>
            </>
            :
                <p className={styles.taller_fecha}>Fecha: {fecha_inicio}</p>
            }
            <Link href={`/talleres/${url}`}>
                <a>
                    {entradas_disponibles ? 
                        <p className={styles.plazas_disponibles}>Plazas Disponibles</p>
                    :
                        <p className={styles.plazas_agotadas}>Plazas agotadas</p>
                    }
                </a>
            </Link>

        </div>
    )
}

export default Taller