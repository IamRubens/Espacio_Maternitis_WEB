import Taller from "./Taller"

import styles from '../../styles/Index.module.css'

const ProximosTalleres = ({talleres}) => {

    const cursos = talleres.data

    const fecha_actual = new Date()

    const proximos_cursos = cursos.filter( curso => {
        const inicio = new Date(curso.attributes.fecha_inicio)
        if (inicio > fecha_actual) {
            return curso
        }
    })


    return (
        <div className={styles.talleres}>
            {proximos_cursos.map( taller => (
                <Taller 
                    key={taller.id}
                    taller={taller}
                />
            ))}
        </div>
    )
}

export default ProximosTalleres