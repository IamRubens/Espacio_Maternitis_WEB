import Taller from "./Taller"

import styles from '../../styles/Index.module.css'

const ProximosTalleres = ({all, talleres}) => {

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
            {all === 'no' ?
                proximos_cursos.map( taller => (
                    <Taller 
                        key={taller.id}
                        taller={taller}
                    />
                ))
            :
                cursos.map( taller => (
                    <Taller 
                        key={taller.id}
                        taller={taller}
                    />
                ))
            }
        </div>
    )
}

export default ProximosTalleres