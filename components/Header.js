import { useState } from "react" 
import Link from "next/link"
import Image from "next/image"

import styles from "../styles/Header.module.css"
import Hamburguer from "./Hamburguer"

const Header = () => {

    const [ navOpen, setNavOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className={`${styles.bar} container`}>
                <div className={styles.logo}>
                    <Link href='/'>
                        <Image layout='responsive' width={400} height={100} src='/img/logo_header.svg' alt='Logo Espacio Maternitis' />
                    </Link>
                </div>
                <div>
                    <Hamburguer 
                        navOpen={navOpen}
                        setNavOpen={setNavOpen}
                    />
                    <div className={navOpen ? `${styles.nav} ${styles.open}` : `${styles.nav}`}>
                        <Link href='/que_es'>Que es</Link>
                        <Link href='/quien_soy'>Quien soy</Link>
                        <Link href='/te_cuento'>Te cuento algo</Link>
                        <Link href='/que_hacemos'>Que hacemos aquí</Link>
                        <Link href='/hablamos'>Hablamos</Link>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header