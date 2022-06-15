import styles from '../styles/Hamburguer.module.css'

const Hamburguer = ({navOpen, setNavOpen}) => {

    const handleOnClick = () => {
        setNavOpen(!navOpen)
    }

    return (
        <div className={styles.hamburger_lines} onClick={handleOnClick}>
            <span className={navOpen ? `${styles.line_one__open}` : undefined}></span>
            <span className={navOpen ? `${styles.line_two__open}` : undefined}></span>
            <span className={navOpen ? `${styles.line_three__open}` : undefined}></span>
        </div>  
    )
}

export default Hamburguer