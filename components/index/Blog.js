import Image from "next/image"
import Link from "next/link"

import styles from "../../styles/Index.module.css"

const Blog = () => {
    return (
        <section className={`${styles.section__index} ${styles.te_cuento}`}>
            <h1 className={`${styles.h1_izq} ${styles.section__index__title}`}>Blog</h1>
            <div className={styles.div_te_cuento}>
                <div className={styles.texto_te_cuento}>
                    <p>
                    Este es mi GRAN secreto!<br />
                    Escribir es mi terapia, mi don y mi calma.
                    Aquí encontrarás información y reflexión.<br /><br />
                    Aportar para ayudar.
                    </p>
                    <Link href="/te_cuento">Entradas</Link>
                </div>
                <div>
                    <Image layout="intrinsic" width={350} height={400} src='/img/te_cuento.svg' alt='Claudia Prado, fundadora de Espacio Maternitis' />
                </div>
            </div>
        </section>
    )
}

export default Blog