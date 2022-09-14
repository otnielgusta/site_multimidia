import styles from '../styles/titulo.module.scss';
export default function Titulo(props){
    return (
        <div className={styles.corpo}>
            <div className={styles.esquerda}>
                {
                props.titulo_menor ? 
                <h1 className={styles.titulo_menor}>{props.titulo}</h1>
                :
                <h1 className={styles.titulo_maior}>{props.titulo}</h1>

                }
                <h3>{props.subtitulo}</h3>
                {
                    props.itens.map((item)=>{
                        return <h4>{item}</h4>
                    })
                }
            </div>
            <div className={styles.direita}>

            </div>
        </div>
    );
}