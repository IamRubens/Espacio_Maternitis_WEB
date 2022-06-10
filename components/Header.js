import Link from "next/link"
import Image from "next/image"

import styles from "../styles/Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.logo}>
                    <Link href='/'>
                        <Image layout='responsive' width={400} height={100} src='/img/' alt='Logo Espacio Maternitis' />
                    </Link>
                </div>
                <div className={styles.nav}>
                    <Link href='/que-es'>Que es</Link>
                    <Link href='/quien-soy'>Quien soy</Link>
                    <Link href='/te-cuento'>Te cuento algo</Link>
                    <Link href='/que-hacemos'>Que hacemos aquí</Link>
                    <Link href='/hablamos'>Hablamos</Link>
                </div>
            </div>
        </header>
    )
}

export default Header