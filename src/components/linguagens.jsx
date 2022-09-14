import styles from '../styles/linguagens.module.scss';
import Image from 'next/image';
export default function Linguagens(props) {
    return (
        <div className={styles.corpo}>
            <div className={styles.esquerda}>
                <h2>{props.titulo}</h2>
                <div className={styles.bloco}>
                    <div>

                        {
                            props.itens.map((item) => {
                                return (
                                    <h4>* {item}</h4>
                                )
                            })
                        }
                    </div>
                    <div className={styles.imagem}>

                        <Image
                            src={props.imagem}
                            width={1000}
                            height={400}
                            layout='fixed'

                        />
                    </div>

                </div>

            </div>

        </div>
    );
}