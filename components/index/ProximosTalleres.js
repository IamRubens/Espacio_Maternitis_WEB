import Taller from "./Taller"

const ProximosTalleres = ({talleres}) => {

    const cursos = talleres.data

    return (
        <>
            {cursos.map( taller => (
                <Taller 
                    key={taller.id}
                    taller={taller}
                />
            ))}
        </>
    )
}

export default ProximosTalleres