import Image from "next/image"
import Link from "next/link"

import styles from "../../styles/Index.module.css"

const QuienSoy = () => {
    return (
        <section className={`${styles.section__index} ${styles.h1_der}`}>
            <div className={styles.right_tittle}>
                <h1>¿Quien soy?</h1>
            </div>
            <div className={styles.div_quien_soy}>
                <div>
                    <Image layout="intrinsic" width={500} height={700} src='/img/foto_quien_soy.jpg' alt='Claudia Prado, fundadora de Espacio Maternitis' />
                </div>
                <div className={styles.texto_quien_soy}>
                    <p>
                    Hola! Mi nombre es Claudia,<br />
                    Soy la creadora y directora de
                    ESPACIO MATERNITIS,
                    y mamá de dos, perra y humana.
                    He caminado mucho antes de llegar aquí,<br />
                    ¿Quieres saber un poco más sobre mi recorrido?
                    </p>
                    <Link href="/quien_soy">Conóceme</Link>
                </div>
            </div>
        </section>
    )
}

export default QuienSoy