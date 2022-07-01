import Link from 'next/link'

import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${styles.links} container`}>
                <div className={styles.links_menu}>
                    <Link href='/circulo_crianza'>
                        <a>Circulo de Crianza</a>
                    </Link>
                    <Link href='/grupo_juego'>
                        <a>Grupo de juego</a>
                    </Link>
                    <Link href='/que_es'>
                        <a>Que es</a>
                    </Link>
                    <Link href='/talleres'>
                        <a>Talleres</a>
                    </Link>
                    <Link href='/blog'>
                        <a>Blog</a>
                    </Link>
                    <Link href='/hablamos'>
                        <a>Hablamos</a>
                    </Link>
                </div>
                <div className={styles.legal}>
                    <Link href='/aviso_legal'>
                        <a>Aviso Legal</a>
                    </Link>
                    <Link href='/politica_privacidad'>
                        <a>Política de privacidad</a>
                    </Link>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Copyright © {new Date().getFullYear()} | Espacio Maternitis</p>
            </div>
        </div>
    )
}

export default Footer