import styles from '../styles/subtitulo.module.scss';
import Image from 'next/image';
export default function Subtitulo(props){
    return (
        <div className={styles.corpo}>
            <div className={styles.esquerda}>
                <h2>{props.titulo}</h2>
                <h3>{props.subtitulo}</h3>
                {
                    props.itens.map((item)=>{
                        return <h4>* {item}</h4>
                    })
                }
                {
                   props.imagem ?  <Image 
                    src="/img1.png"
                    width={400}
                    height={400}
                    layout='fixed'

                    /> :
                     <div></div>
                }
                
            </div>
            <div className={styles.direita}>

            </div>
        </div>
    );
}