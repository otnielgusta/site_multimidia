import styles from '../styles/video.module.scss';
import Image from 'next/image';
export default function Video(props){
    return (
        <div className={styles.corpo}>
            <div className={styles.esquerda}>
                <h2>Vídeo de uma aplicação para dispositivos móveis</h2>
               
                
            </div>
            <div className={styles.direita}>
                <video src="video.mp4" controls></video>
            </div>
        </div>
    );
}