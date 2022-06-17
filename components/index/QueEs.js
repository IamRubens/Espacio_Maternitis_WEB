import Link from "next/link"

import styles from "../../styles/Index.module.css"

import Button from "../Button"

const QueEs = () => {
    return (
        <section className={`${styles.section__index} ${styles.que_es}`}>
            <h1 className={`${styles.h1_izq} ${styles.section__index__title}`}>¿Que es?</h1>
            <div className={styles.section__cotent}>
                <p>Es un concepto que llevó a un lugar!<br />
                Defino Maternitis como «el proceso que transforma
                a una mujer mientras gesta, cría y cuida, con amor y placer».<br />
                Y, ¿de donde nace Espacio Maternitis?
                </p>
                <Button 
                    path={'/que_es'}
                    position={"right"}
                    text={'Descubrelo'}
                />
            </div>
        </section>
    )
}

export default QueEs