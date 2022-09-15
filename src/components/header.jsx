import { useRouter } from 'next/router';
import styles from '../styles/header.module.scss'

export default function Header() {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={styles.containerHeader}>
                <div className={styles.botoes}>
                    <button onClick={(e) => {
                        e.preventDefault();
                        router.push({
                            pathname: '/'
                        })
                    }} >Início</button>

                    <button onClick={(e) => {
                        e.preventDefault();
                        router.push({
                            pathname: '/introducao'
                        })
                    }}>Introdução</button>

                    <button onClick={(e) => {
                        e.preventDefault();
                        router.push({
                            pathname: '/mobile'
                        })
                    }}>Mobile</button>

                    <button onClick={(e) => {
                        e.preventDefault();
                        router.push({
                            pathname: '/video'
                        })
                    }}>Video</button>

                </div>

            </div>
        </header>
    )
}