
import styles from '../../styles/Subtitulo.module.scss'
import Header from '../../components/header'
import Video from '../../components/video'


export default function Mobile() {
    return (
        <div className={styles.container}>
            <Header />
            <Video />
        </div>
    )
}
