import { useState } from "react" 
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"

import styles from "../styles/Header.module.css"
import Hamburguer from "./Hamburguer"

const Header = () => {

    const { asPath } = useRouter()

    const [ navOpen, setNavOpen] = useState(false)

    return (
        <header className={`${styles.header} `}>
            <div className={`${styles.bar} container`}>
                <div className={styles.logo}>
                    {asPath !== '/' ?
                    <Link href='/'>
                        <Image layout='responsive' width={400} height={100} src='/img/logo_header.svg' alt='Logo Espacio Maternitis' />
                    </Link>
                    : ''}
                    
                </div>
                <div>
                    <Hamburguer 
                        navOpen={navOpen}
                        setNavOpen={setNavOpen}
                    />
                    <div className={`${styles.nav} ${navOpen ? styles.open : ''} ${asPath === '/' ? styles.index : ''}`}>
                        <Link href='/que_es'>Que es</Link>
                        <Link href='/que_hacemos'>Talleres</Link>
                        <Link href='/te_cuento'>Grupo de juego</Link>
                        <Link href='/quien_soy'>Circulo de Crianza</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/hablamos'>Hablamos</Link>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header