import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Titulo from '../components/titulo'
import Spacer from '../components/spacer'
import Subtitulo from '../components/subtitulo'
import DuasColunas from '../components/duas_colunas'
import Video from '../components/video'
import Linguagens from '../components/linguagens'
import Header from '../../components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Titulo
        titulo_menor={false}
        titulo="Programação Mobile Android"
        subtitulo="Otniel Silva Santos"
        itens={[
          "Sistemas de Informação",
          "IFMG - SJE"
        ]}

      />
      <Spacer />
      <Subtitulo
        titulo="Introdução"
        subtitulo="O que é Android?"
        itens={[
          "Sistema Operacional Open Source.",
          "Fundado em 2003 pela Android Inc.",
          "Sistema Operacional Mobile mais utilizado do mundo."
        ]}
      />
      <Spacer />
      <Subtitulo
        titulo="Introdução"
        subtitulo=""
        itens={[
          "Em 2005 o Google comprou a Android Inc.",
          "Em 2007 a criação da Open Handset Alliance"
        ]}
      />

      <Spacer />
      <Subtitulo
        titulo="Introdução"
        subtitulo=""
        itens={[
          "Lançamento do primeiro android comercial em 2008, o HTC DREAM"
        ]}
        imagem="img1.png"
      />

      <Spacer />
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

      <Spacer />
      <Video />
    </div>
  )
}
