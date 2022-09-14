import styles from '../styles/duas_colunas.module.scss';
import Image from 'next/image';
export default function DuasColunas(props){
    return (
        <div className={styles.corpo}>
            <div className={styles.esquerda}>
                <h2>{props.titulo}</h2>
                <div className={styles.bloco}>
                    {
                        props.itens.map((item)=>{
                            return (
                            <div className={styles.itens}>
                                <h3 key={item.titulo}>{item.titulo}</h3>
                                {
                                    item.descricao.map((desc)=>{
                                       return item.descricao.length > 1 ? <h4 key={desc}>* {desc}</h4> : <h4 key={desc}> {desc}</h4>
                                    })
                                }  
                            </div>)
                        })
                    }
                </div>               
                
            </div>
           
        </div>
    );
}