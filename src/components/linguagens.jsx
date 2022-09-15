import styles from '../styles/linguagens.module.scss';
import Image from 'next/image';
export default function Linguagens(props) {
    return (
        <div className={styles.corpo}>
            <div className={styles.esquerda}>
                <h2  key={props.titulo}>{props.titulo}</h2>
                <div className={styles.bloco}>
                    <div>

                        {
                            props.itens.map((item) => {
                                return (
                                    <h4  key={item}>* {item}</h4>
                                )
                            })
                        }
                    </div>
                    <div className={styles.imagem}>

                        <Image
                            src={props.imagem}
                            width={600}
                            height={200}
                            layout='fixed'

                        />
                    </div>

                </div>

            </div>

        </div>
    );
}