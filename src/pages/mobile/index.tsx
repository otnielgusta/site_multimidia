
import styles from '../../styles/Subtitulo.module.scss'
import Subtitulo from '../../components/subtitulo'
import Header from '../../components/header'
import Spacer from '../../components/spacer'
import Titulo from '../../components/titulo'
import DuasColunas from '../../components/duas_colunas'
import Linguagens from '../../components/linguagens'


export default function Mobile() {
    return (
        <div className={styles.container}>
            <Header />
            <Titulo
                titulo_menor={true}
                titulo="Como é o desenvolvimento de aplicativos mobile android?"
                subtitulo=""
                itens={[
                    "Kits de desenvolvimento do Google",
                    "Desenvolvimento nativo",
                    "Desenvolvimento híbrido",
                ]}
            />
            <Spacer />
            <DuasColunas
                titulo="Kits de desenvolvimento do Google"
                itens={[
                    {
                        titulo: "Android NDK",
                        descricao: ["Kit de Desenvolvimento Nativo, utilizado em casos específicos como  gerenciar atividades nativas do android."]
                    },
                    {
                        titulo: "Android SDK",
                        descricao: ["Kit de desenvolvimento de software,  possui bibliotecas e ferramentas essenciais para o desenvolvimento mobile android."]
                    },

                ]}
            />

            <Spacer />
            <DuasColunas
                titulo="Tipos de Desenvolvimento Mobile"
                itens={[
                    {
                        titulo: "Desenvolvimento Nativo",
                        descricao: [
                            "É necessário um especialista em uma linguagem específica de desenvolvimento mobile da plataforma.",
                            "Um código para cada plataforma."
                        ]
                    },
                    {
                        titulo: "Desenvolvimento Híbrido",
                        descricao: [
                            "Não é necessário um especialista em uma linguagem específica de desenvolvimento mobile da plataforma.",
                            "Apenas um  código gera o aplicativo para ambas plataformas."
                        ]
                    },

                ]}
            />

            <Spacer />
            <Linguagens
                titulo="Algumas das linguagens de programação utilizadas no desenvolvimento nativo"
                itens={[
                    "Java",
                    "Kotlin"
                ]}
                imagem="/nativo.png"
            />

            <Spacer />
            <Linguagens
                titulo="Alguns dos frameworks mais utilizados no desenvolvimento Híbrido"
                itens={[
                    "React Native",
                    "Flutter",
                    "Ionic"
                ]}
                imagem="/hibrido.png"
            />
        </div>
    )
}
