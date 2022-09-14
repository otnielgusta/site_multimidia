import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Subtitulo from '../../components/subtitulo'
import Header from '../../components/header'


export default function Introducao() {
  return (
    <div className={styles.container}>
        <Header />
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

    </div>
  )
}
