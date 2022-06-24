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
            <div className={`${styles.bar} ${asPath !== '/' ? styles.header_height : ''} ${asPath === '/' ? styles.bar_flex_end : styles.bar_flex_between} container`}>
                {asPath !== '/' ?
                    <div className={styles.logo}>
                        <Link href='/'>
                            <a>
                            <Image layout='responsive' width={400} height={100} src='/img/logo_header.svg' alt='Logo Espacio Maternitis' />
                            </a>
                        </Link>
                    </div>
                : ''}
                    

                <div>
                    <Hamburguer 
                        navOpen={navOpen}
                        setNavOpen={setNavOpen}
                    />
                    <div className={`${styles.nav} ${navOpen ? styles.open : ''} ${asPath === '/' ? styles.index : ''}`}>
                        <Link href='/circulo_crianza'>
                            <a onClick={() => setNavOpen(!navOpen)}>Circulo de Crianza</a>
                        </Link>
                        <Link href='/grupo_juego'>
                            <a onClick={() => setNavOpen(!navOpen)}>Grupo de juego</a>
                        </Link>
                        <Link href='/que_es'>
                            <a onClick={() => setNavOpen(!navOpen)}>Que es</a>
                        </Link>
                        <Link href='/talleres'>
                            <a onClick={() => setNavOpen(!navOpen)}>Talleres</a>
                        </Link>
                        <Link href='/blog'>
                            <a onClick={() => setNavOpen(!navOpen)}>Blog</a>
                        </Link>
                        <Link href='/hablamos'>
                            <a onClick={() => setNavOpen(!navOpen)}>Hablamos</a>
                        </Link>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header