import styles from '../styles/Taller.module.css'

const Mensaje_validacion = ({children}) => {
    return (
    <div className={`${styles.alerta} ${styles.error}`}>
        {children}
    </div>
    )
}

export default Mensaje_validacion